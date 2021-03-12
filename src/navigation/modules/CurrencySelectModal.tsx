import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { localization } from '../../modules/localization/localization';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { CurrencyItem } from './CurrencyItem';

interface IProps {
  currencyList: ICurrencyItem[],
  lang: ILanguage
  route: any
}

function currencySelectModal({ 
  currencyList, 
  lang, 
  route: { 
    params: { 
      currencyListNumber 
    } 
  } 
}: IProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <View 
      style={{
        ...commonStyles.currencyModalContainer,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >

      <View style={commonStyles.currencyModalTitleContainer}>
        <Text 
          style={{
            ...commonStyles.currencyModalTitleText,
            color: getTextColorWithTheme(theme)
          }}
        >
          {localization.currencyModal.title[lang]}
        </Text>
      </View>

      {
        currencyList.map(item => (
          <CurrencyItem 
            item={item} 
            key={item.CharCode} 
            currencyListNumber={currencyListNumber} 
          />
        ))
      }

    </View>
  );
}

export const CurrencySelectModal = connect(
  (state: IState) => ({
    currencyList: state.currencyList,
    lang: state.localization
  })
)(currencySelectModal);