import React, { useContext } from 'react';
import { Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { currencySymbolObj } from '../../modules/currency/currencySymbolObj';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

interface IProps {
  data: IConvertArgs,
  convertNum: number
}

export function ConvertNumber({
  data,
  convertNum
}: IProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <Text
      style={{
        color: getTextColorWithTheme(theme),
        ...commonStyles.treningModeCountText
      }}
    >
      {`${convertNum} ${currencySymbolObj[data.inputCurrency.currency]}`}
    </Text>
  );
}