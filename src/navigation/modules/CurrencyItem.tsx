import React, { Dispatch, useContext } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { CheckMark } from '../../core/svgs/Flags/CheckMark';
import { flagsObj } from '../../modules/currency/flagsObj';
import { localization } from '../../modules/localization/localization';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

interface IProps {
  item: ICurrencyItem,
  lang: ILanguage,
  currencyListNumber: number,
  selectCurrency: any,
  onChangeCurrency: Dispatch<any>
}

function currencyItem({
  item, 
  lang, 
  currencyListNumber,
  selectCurrency,
  onChangeCurrency
}: IProps) {
  const Icon = flagsObj[item.CharCode];
  const { theme } = useContext(ThemeContext);
  
  function handlePress(newCurrency: ICurrency) {
    onChangeCurrency({
      newCurrency,
      currencyListNumber
    });
  }

  return (
    <TouchableOpacity
      onPress={() => handlePress(item.CharCode)}
    >
      <View style={commonStyles.currencyItemContainer}>
        <View style={commonStyles.currencyIconContainer}>
          <Icon />
        </View>

        <View>
          <Text 
            style={{
              ...commonStyles.currencyItemTextChar,
              color: getTextColorWithTheme(theme)
            }}
          >
            {item.CharCode}
          </Text>

          <Text 
            style={{
              ...commonStyles.currencyItemTextName,
              color: getTextColorWithTheme(theme)
            }}
          >
            {localization.currencyModal.currency[item.CharCode][lang]}
          </Text>

        </View>

        {
          selectCurrency[`currency${currencyListNumber}`] === item.CharCode ?
            <CheckMark 
              style={{
                position: 'absolute',
                right: 45
              }}
            />
          :
            null
        }
      </View>
    </TouchableOpacity>
  );
}

export const CurrencyItem = connect(
  (state: IState) => ({
    lang: state.localization,
    selectCurrency: {
      currency1: state.currency1,
      currency2: state.currency2
    }
  }),
  (dispatch: Dispatch<IAction>) => ({
    onChangeCurrency: (payload: any) => {
      dispatch({ type: 'CURRENCY_SET', payload })
    }
  })
)(currencyItem);