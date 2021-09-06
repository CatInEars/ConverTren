import React, { useEffect, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { SelectBanner } from './SelectBanner';
import { SelectList } from './SelectList';

type SelectItem = string | number;

interface ISelectProps {
  items: string[] | number[],
  onSelectItem?: (newItem?: SelectItem) => boolean | void,
  containerStyle?: ViewStyle,
  defaultItemIndex?: number
}

const defaultSelectStyle: ViewStyle = {
  width: 160,
  height: 30,
  borderRadius: 8,
  position: 'relative'
}

export function Select({
  items,
  onSelectItem,
  containerStyle = defaultSelectStyle,
  defaultItemIndex = 0
}: ISelectProps) {

  const [isShow, setIsShow] = useState(false);
  const [activeItem, setActiveItem] = useState(items[defaultItemIndex]);

  useEffect(() => {
    if (items.length === 0) {
      throw new Error('Select component should have some items')
    }
  }, []);

  useEffect(() => {
    setIsShow(false);
  }, [activeItem]);

  return (
    <View style={containerStyle}>
      <SelectBanner 
        activeItem={activeItem}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      {
        isShow ?
          <SelectList
            items={items}
            setActiveItem={setActiveItem}
            onSelectItem={onSelectItem}
          />
        :
          null
      }
    </View>
  );

}