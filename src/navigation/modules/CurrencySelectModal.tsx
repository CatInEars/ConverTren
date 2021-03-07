import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { needValute } from '../../modules/needValute';
import { CurrencyItem } from './CurrencyItem';

interface IProps {
  currencyList: ICurrencyItem[]
}

function currencySelectModal({ currencyList }: IProps) {
  return (
    <View style={{flex: 1, backgroundColor: 'skyblue'}}>
      <FlatList
        data={currencyList}
        renderItem={({item}) => {

          if (needValute.indexOf(item.CharCode) === -1) return null
          return <CurrencyItem {...item} />

        }}
        keyExtractor={ (item: any) => item.CharCode}
      />
    </View>
  );
}

export const CurrencySelectModal = connect(
  (state: IState) => ({
    currencyList: state.currencyList
  })
)(currencySelectModal);