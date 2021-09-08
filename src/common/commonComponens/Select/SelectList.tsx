import React, { useContext } from 'react';
import { Text, TouchableHighlight, ScrollView } from 'react-native';
import { getBGCWithTheme } from '../../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../../modules/theme/ThemeContext';
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

  const { theme } = useContext(ThemeContext);

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
          <TouchableHighlight
            onPress={() => handlePress(item)}
            style={{
              ...commonStyles.selectScrollItem,
              backgroundColor: getBGCWithTheme(theme)
            }}
            key={index.toString()}
          >
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                color: getTextColorWithTheme(theme)
              }}
            >
              {item}
            </Text>
          </TouchableHighlight>
        ))
      }
    </ScrollView>
  );
}