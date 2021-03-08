import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { needValute } from '../../modules/currency/needValute';
import { CurrencyItem } from './CurrencyItem';

interface IProps {
  currencyList: ICurrencyItem[]
}

function currencySelectModal({ currencyList }: IProps) {
  return (
    <View style={commonStyles.currencyModalContainer}>
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