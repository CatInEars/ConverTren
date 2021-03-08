import React, { useContext } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { needValute } from '../../modules/currency/needValute';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { CurrencyItem } from './CurrencyItem';

interface IProps {
  currencyList: ICurrencyItem[]
}

function currencySelectModal({ currencyList }: IProps) {
  const { theme } = useContext(ThemeContext)
  return (
    <View 
      style={{
        ...commonStyles.currencyModalContainer,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >
      {
        currencyList.map( item => {
          if (needValute.indexOf(item.CharCode) === -1) return null
          console.log(item.CharCode)
          return <CurrencyItem {...item} key={item.CharCode}/>
        })
      }
    </View>
  );
}

export const CurrencySelectModal = connect(
  (state: IState) => ({
    currencyList: state.currencyList
  })
)(currencySelectModal);