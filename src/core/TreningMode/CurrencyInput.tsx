import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { currencySymbolObj } from '../../modules/currency/currencySymbolObj';
import { localization } from '../../modules/localization/localization';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

interface IProps {
  answerValue: string,
  setAnswerValue: (value: string) => void,
  handleSubmit: () => void,
  lang: ILanguage,
  data: IConvertArgs,
  isAnswered: string
}

export function CurrencyInput({ 
  answerValue,
  setAnswerValue,
  handleSubmit,
  lang,
  data,
  isAnswered
}: IProps) {
  const { theme } = useContext(ThemeContext);

  const handleChange = (newValue: string): void => {
    const last = newValue[newValue.length - 1];
    if (last === '.' || last === ',' || last === ' ' || last === '-') return
    setAnswerValue(newValue)
  }

  return (
    <>
    <View style={commonStyles.trenModeInputContainer}>
      <TextInput 
        value={answerValue}
        onChangeText={handleChange}
        style={{
          ...commonStyles.treningScreenInput,
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
      <Text style={{
        position: 'absolute',
        right: '5%',
        top: '25%',
        fontSize: 17,
        fontFamily: 'OpenSans-Regular',
        color: 'gray'
      }}>{currencySymbolObj[data.outputCurrency]}</Text>
    </View>
      <View 
        style={{
          backgroundColor: 'gray',
          width: '77%',
          height: 2,
          borderRadius: 3
        }}
      />
    </>
  );
}