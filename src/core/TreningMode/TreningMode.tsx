import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { currencyConverter } from '../../modules/currency/currencyConverter'
import { getRandomWithStep } from '../../modules/random/getRandomWithStep';
import { getRandom } from '../../modules/random/getRandom';
import { TextInput } from 'react-native-gesture-handler';

interface IProps {
  currencyData: ICurrencyItem[],
  currencys: any
}

function treningMode({ currencyData, currencys }: IProps) {
  const [answerValue, setAnswerValue] = useState('');
  const [count, setCount] = useState(getRandomWithStep(10, 3000, 10));
  const [inputCurrency, setInputCurrency] = useState(getRandom(1, 2));
  const data: IConvertArgs = {
    inputCurrency: {
      currency: currencys[`currency${inputCurrency}`],
      count
    },
    outputCurrency: currencys[`currency${Math.abs(inputCurrency-3)}`],
    currencyData
  }
  const [trueAsw, setTrueAsw] = useState(currencyConverter(data));
  const [isAnswered, setIsAnwsered] = useState('');
  
  const { theme } = useContext(ThemeContext);

  const handlePress = (): void => {
    const procent = 100 - Math.abs( (+answerValue / trueAsw) - 1) * 100;
    if (procent < 5) {
      return setIsAnwsered('< 5')
    }
    setIsAnwsered(Math.round(procent).toString());
  }

  return (
    <View
      style={{
        ...commonStyles.treningModeScreen,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >
      <Text
        style={{
          color: getTextColorWithTheme(theme)
        }}
      >
        {`${count} ${data.inputCurrency.currency}`}
      </Text>

      <TextInput 
        value={answerValue}
        onChangeText={newValue => setAnswerValue(newValue)}
        style={commonStyles.treningScreenInput}
      />

      {
        !!isAnswered &&
        <Text>{`${isAnswered}%`}</Text>
      }

      <Button
        title='Сравнить'
        onPress={handlePress}
      />
    </View>
  );
}

export const TreningMode = connect(
  (state: IState): IProps => ({
    currencyData: state.currencyList,
    currencys: {
      currency1: state.currency1,
      currency2: state.currency2
    }
  })
)(treningMode);