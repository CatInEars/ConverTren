import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, Button, Alert, Animated } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { currencyConverter } from '../../modules/currency/currencyConverter'
import { getRandomWithStep } from '../../modules/random/getRandomWithStep';
import { getRandom } from '../../modules/random/getRandom';
import { TextInput } from 'react-native-gesture-handler';
import { getBGCInputWithTheme } from '../../modules/theme/getBGCInputWithTheme';
import { currencySymbolObj } from '../../modules/currency/currencySymbolObj';
import { EndScreen } from './EndScreen';
import { localization } from '../../modules/localization/localization';
import { useNavigation } from '@react-navigation/core';
import { screenWidth } from '../../common/commonStyles';
import { TIMER_DURATION } from '../../common/timer_duration';

interface IProps {
  currencyData: ICurrencyItem[],
  currencys: any,
  lang: ILanguage,
  timerNeed: boolean
}

function treningMode({ 
  currencyData, 
  currencys, 
  lang,
  timerNeed
}: IProps) {
  const [answerValue, setAnswerValue] = useState('');
  const [count, setCount] = useState(getRandomWithStep(10, 3000, 10));
  const [inputCurrency, setInputCurrency] = useState(getRandom(1, 2));
  const [data, setData] = useState<IConvertArgs>({
    inputCurrency: {
      currency: currencys[`currency${inputCurrency}`],
      count
    },
    outputCurrency: currencys[`currency${Math.abs(inputCurrency-3)}`],
    currencyData
  });
  const [trueAsw, setTrueAsw] = useState(currencyConverter(data));
  const [isAnswered, setIsAnwsered] = useState('');
  const [page, setPage] = useState(0);
  const [procentArr, setProcentArr] = useState<number[]>([]);
  const timerValue = useRef(new Animated.Value(0)).current;
  const [timerDo, setTimerDo] = useState(timerNeed);
  const [timeIsOut, setTimeIsOut] = useState(false);
  
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      setTimerDo(false);

      Alert.alert(
        localization.treningMode.alertTitle[lang],
        localization.treningMode.alertText[lang],
        [
          { 
            text: localization.treningMode.alertCancelButton[lang], 
            style: 'cancel', 
            onPress: () => setTimerDo(true)
          },
          {
            text: localization.treningMode.alertOkButton[lang],
            style: 'destructive',
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]
      );
    });

    return function() {
      timerValue.setValue(0);
      setAnswerValue('');
      setIsAnwsered('');
      setTimerDo(true);
    }
  }, []);

  useEffect(() => {
    timerValue.setValue(0);
    setData({
      inputCurrency: {
        currency: currencys[`currency${inputCurrency}`],
        count
      },
      outputCurrency: currencys[`currency${Math.abs(inputCurrency-3)}`],
      currencyData
    });
    setAnswerValue('');
    setIsAnwsered('');
    setTimerDo(true);
  }, [page]);

  useEffect(() => {
    if (!timerDo) {
      timerValue.stopAnimation();
    } else {
      // TS error fix
      const copy: any = {...timerValue};
      Animated.timing(timerValue, {
        toValue: 1,
        duration: TIMER_DURATION - TIMER_DURATION*copy._value,
        useNativeDriver: false
      }).start(e => {
        if (!!e.finished) {
          setTimeIsOut(true);
        }
      });
    }
  }, [timerDo]);

  useEffect(() => {
    setTrueAsw(currencyConverter(data));
  }, [data])

  const handleChange = (newValue: string): void => {
    const last = newValue[newValue.length - 1];
    if (last === '.' || last === ',' || last === ' ' || last === '-') return
    setAnswerValue(newValue)
  }

  const handleSubmit = (): void => {
    const procent = 100 - Math.abs( (+answerValue / trueAsw) - 1) * 100;
    setTimerDo(false);
    if (procent < 5) {
      setProcentArr([...procentArr, 0]);
      return setIsAnwsered('< 5');
    }
    setIsAnwsered(Math.round(procent).toString());
    setProcentArr([...procentArr, procent]);
  }

  const nextPage = () => {
    setCount(getRandomWithStep(10, 3000, 10));
    setInputCurrency(getRandom(1, 2));
    setPage(page + 1);
  }

  return (
    <View
      style={{
        ...commonStyles.treningModeScreen,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >
      {
        (page < 3 && !timeIsOut) ?
          <>
            <Text
              style={{
                color: getTextColorWithTheme(theme),
                ...commonStyles.treningModeCountText
              }}
            >
              {`${count} ${currencySymbolObj[data.inputCurrency.currency]}`}
            </Text>

            <TextInput 
              value={answerValue}
              onChangeText={handleChange}
              style={{
                ...commonStyles.treningScreenInput,
                backgroundColor: getBGCInputWithTheme(theme),
                color: getTextColorWithTheme(theme)
              }}
              keyboardType="number-pad"
              onSubmitEditing={handleSubmit}
              placeholder={
                `${localization.treningMode.inputPlaceholder[lang]} ${currencySymbolObj[data.outputCurrency]}`
              }
              placeholderTextColor={getTextColorWithTheme(theme)}
              editable={!isAnswered}
            />

            {
              !!isAnswered &&
              <>
                <Text>{`${isAnswered}%`}</Text>
                <Button 
                  title="NEXT PAGE"
                  onPress={nextPage}
                />
              </>
            }

            {
              !!answerValue &&
              <Button
                title='SELECT'
                onPress={handleSubmit}
                disabled={!!isAnswered}
              />
            }
            {
              timerNeed &&
              <Animated.View
              style={
                {
                  transform: [{ 
                    translateX: timerValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -screenWidth]
                    }) 
                  }],
                  width: '100%',
                  height: 10, 
                  backgroundColor: 'orange',
                }
              }
            />
            }
          </>
        :
          <EndScreen procentArr={procentArr} timeIsOut={timeIsOut} />
      }
    </View>
  );
}

export const TreningMode = connect(
  (state: IState) => ({
    currencyData: state.currencyList,
    currencys: {
      currency1: state.currency1,
      currency2: state.currency2,
    },
    lang: state.localization,
    timerNeed: state.timerNeed
  })
)(treningMode);