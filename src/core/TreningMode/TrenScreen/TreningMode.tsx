import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Alert, Animated } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { commonStyles } from '../../../common/commonStyles';
import { getBGCWithTheme } from '../../../modules/theme/getBGCWithTheme';
import { ThemeContext } from '../../../modules/theme/ThemeContext';
import { currencyConverter } from '../../../modules/currency/currencyConverter'
import { getRandomWithStep } from '../../../modules/random/getRandomWithStep';
import { getRandom } from '../../../modules/random/getRandom';
import { EndScreen } from '.././EndScreen/EndScreen';
import { localization } from '../../../modules/localization/localization';
import { TIMER_DURATION } from '../../../common/timer_duration';
import { CurrencyInput } from './CurrencyInput';
import { SelectButton } from './SelectButton';
import { ConvertNumber } from './ConvertNumber';
import { Timer } from './Timer';
import { NextPage } from './NextPage';
import { Accuracy } from './Accuracy';
import { BackButton } from './BackButton';
import { currencySymbolObj } from '../../../modules/currency/currencySymbolObj';

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
  const [convertNum, setConvertNum] = useState(getRandomWithStep(10, 3000, 10));
  const [inputCurrency, setInputCurrency] = useState(getRandom(1, 2));
  const [data, setData] = useState<IConvertArgs>({
    inputCurrency: {
      currency: currencys[`currency${inputCurrency}`],
      count: convertNum
    },
    outputCurrency: currencys[`currency${Math.abs(inputCurrency-3)}`],
    currencyData
  });
  const [trueAsw, setTrueAsw] = useState(Math.round(currencyConverter(data)));
  const [isAnswered, setIsAnwsered] = useState('');
  const [page, setPage] = useState(0);
  const [procentArr, setProcentArr] = useState<number[]>([]);
  const timerValue = useRef(new Animated.Value(0)).current;
  const [timerDo, setTimerDo] = useState(timerNeed);
  const [timeIsOut, setTimeIsOut] = useState(false);
  const modalCall = (e: any) => {
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
  }

  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();

  useEffect(() => {
    return function() {
      timerValue.stopAnimation();
      timerValue.setValue(0);
      setAnswerValue('');
      setIsAnwsered('');
      setTimerDo(timerNeed);
    }
  }, []);

  useEffect(() => {
    if (page === 0) {
      navigation.addListener('beforeRemove', modalCall);
    }

    if (page === 6) {
      setTimerDo(false);
    } else {
      timerValue.setValue(0);
      setTimerDo(timerNeed);
      setData({
        inputCurrency: {
          currency: currencys[`currency${inputCurrency}`],
          count: convertNum
        },
        outputCurrency: currencys[`currency${Math.abs(inputCurrency-3)}`],
        currencyData
      });
      setAnswerValue('');
      setIsAnwsered('');
    }
  }, [page]);

  useEffect(() => {
    if (!timerDo || timeIsOut) {
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
          setPage(10);
        }
      });
    }
  }, [timerDo, timeIsOut]);

  useEffect(() => {
    setTrueAsw(Math.round(currencyConverter(data)));
  }, [data])

  const handleSubmit = (): void => {
    const procent = 100 - Math.abs( (+answerValue / trueAsw) - 1) * 100;
    setTimerDo(false);
    if (procent < 5) {
      setProcentArr([...procentArr, 0]);
      return setIsAnwsered('< 5');
    }
    setIsAnwsered(procent.toFixed(1));
    setProcentArr([...procentArr, procent]);
  }

  const nextPage = () => {
    setConvertNum(getRandomWithStep(10, 3000, 10));
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
        (page < 6 && !timeIsOut) ?
          <>
            <BackButton
              theme={theme}
            />

            <ConvertNumber
              convertNum={convertNum}
              data={data}
            />

            <CurrencyInput 
              answerValue={answerValue}
              setAnswerValue={setAnswerValue}
              handleSubmit={handleSubmit}
              lang={lang}
              data={data}
              isAnswered={isAnswered}
            />

            <SelectButton
              handleSubmit={handleSubmit}
              isAnswered={isAnswered}
              answerValue={answerValue}
              lang={lang}
            />

            {
              !!isAnswered &&
              <>
                <Accuracy
                  procent={isAnswered}
                  trueAsw={trueAsw}
                  lang={lang}
                  outputCurrency={
                    currencySymbolObj[
                      currencys[`currency${Math.abs(inputCurrency-3)}`]
                    ]
                  }
                />
                <NextPage
                  lang={lang} 
                  nextPage={nextPage}
                />
              </>
            }

            {
              timerNeed && !isAnswered &&
              <Timer
                timerValue={timerValue}
              />
            }
          </>
        :
          <EndScreen 
            procentArr={procentArr} 
            timeIsOut={timeIsOut}
            setPage={setPage}
            setTimeIsOut={setTimeIsOut}
          />
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