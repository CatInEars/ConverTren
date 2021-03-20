import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { flagsObjCircle } from '../../modules/currency/flagsObjCircle';
import { flagsObjSquare } from '../../modules/currency/flagsObjSquare';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { ConvertIcon } from '../svgs/others/ConvertIcon';

interface IProps {
  handleOpenCurrencyList: (n: number) => void,
  currency1: ICurrency,
  currency2: ICurrency
}

function сurrencySelector({ handleOpenCurrencyList, currency1, currency2 }: IProps) {
  const { theme } = useContext(ThemeContext);
  const Icon1 = flagsObjSquare[currency1];
  const Icon2 = flagsObjSquare[currency2];

  return (
    <View
      style={commonStyles.trenScreenCurrencyButtonsContainer}
    >
      <TouchableOpacity
        onPress={() => handleOpenCurrencyList(1)}
      >
        <Icon1 style={commonStyles.trenScreenCurrencyButton} />
      </TouchableOpacity>

      <ConvertIcon
        style={commonStyles.trenScreenConvertIcon}
        fill={getTextColorWithTheme(theme)} 
        rotation={90}
      />

      <TouchableOpacity
        onPress={() => handleOpenCurrencyList(2)}
      >
        <Icon2 style={commonStyles.trenScreenCurrencyButton} />
      </TouchableOpacity>
    </View>
  );
}

export const CurrencySelector = connect(
  (state: IState) => ({
    currency1: state.currency1,
    currency2: state.currency2,
  })
)(сurrencySelector)