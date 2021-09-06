import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { commonStyles } from '../../commonStyles';

interface ISelectList {
  items: number[] | string[],
  setActiveItem: (newItem: string | number) => void
  onSelectItem?: (item: string | number) => void
}

export function SelectList({
  items,
  setActiveItem,
  onSelectItem
}: ISelectList) {

  const handlePress = (item) => {
    setActiveItem(item);
    onSelectItem(item);
  }
  return (
    <ScrollView
      style={commonStyles.selectScrollContainer}
    >
      {
        items.map((item, index) => (
          <TouchableOpacity
            onPress={() => handlePress(item)}
            style={commonStyles.selectScrollItem}
            key={index.toString()}
          >
            <Text
              style={{
                fontFamily: 'OpenSans-Regular'
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
}