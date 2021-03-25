import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
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

interface IProps {
  currencyData: ICurrencyItem[],
  currencys: any,
  lang: ILanguage
}

function treningMode({ 
  currencyData, 
  currencys, 
  lang
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
  })
  const [trueAsw, setTrueAsw] = useState(currencyConverter(data));
  const [isAnswered, setIsAnwsered] = useState('');
  const [page, setPage] = useState(0);
  const [procentArr, setProcentArr] = useState<number[]>([]);
  
  const { theme } = useContext(ThemeContext);

  function nextPage() {
    setCount(getRandomWithStep(10, 3000, 10));
    setInputCurrency(getRandom(1, 2));
    setPage(page + 1);
  }

  useEffect(() => {
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
  }, [page]);

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
    if (procent < 5) {
      setProcentArr([...procentArr, procent]);
      return setIsAnwsered('< 5')
    }
    setIsAnwsered(Math.round(procent).toString());
    setProcentArr([...procentArr, procent]);
  }

  return (
    <View
      style={{
        ...commonStyles.treningModeScreen,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >
      {
        page < 3 ?
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
          </>
        :
          <EndScreen procentArr={procentArr} />
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
    lang: state.localization
  })
)(treningMode);