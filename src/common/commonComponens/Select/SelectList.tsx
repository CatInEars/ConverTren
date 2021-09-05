import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { commonStyles } from '../../commonStyles';

interface ISelectList {
  items: number[] | string[],
  setActiveItem: (newItem: string | number) => void
}

export function SelectList({
  items,
  setActiveItem
}: ISelectList) {
  return (
    <ScrollView
      style={commonStyles.selectScrollContainer}
    >
      {
        items.map((item, index) => (
          <TouchableOpacity
            onPress={() => setActiveItem(item)}
            style={commonStyles.selectScrollItem}
            key={index.toString()}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
}