import React, { useContext } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { currencySymbolObj } from '../../modules/currency/currencySymbolObj';
import { localization } from '../../modules/localization/localization';
import { getBGCInputWithTheme } from '../../modules/theme/getBGCInputWithTheme';
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
  );
}