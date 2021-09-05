import React, { useEffect, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { SelectBanner } from './SelectBanner';
import { SelectList } from './SelectList';

type Item = string | number;

interface ISelectProps {
  items: string[] | number[],
  onSelectItem?: (newItem?: Item) => boolean | void,
  containerStyle?: ViewStyle,
  defaultItemIndex?: number
}

const defaultStyle: ViewStyle = {
  width: 160,
  height: 30,
  borderRadius: 8,
  position: 'relative'
}

export function Select({
  items,
  onSelectItem,
  containerStyle = defaultStyle,
  defaultItemIndex = 0
}: ISelectProps) {

  const [isShow, setIsShow] = useState(false);
  const [activeItem, setActiveItem] = useState(items[defaultItemIndex]);

  useEffect(() => {
    if (items.length === 0) {
      throw new Error('Select component:  Should have some items')
    }
  }, []);

  useEffect(() => {
    setIsShow(false);
  }, [activeItem])

  return (
    <View style={{...containerStyle, position: 'relative'}}>
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
          />
        :
          null
      }
    </View>
  );

}
    // <TouchableOpacity
    //   onPress={() => setIsShow(!isShow)}
    //   style={containerStyle}
    // >


    //   {
    //     <FlatList 
    //       data={items}
    //       renderItem={({ item, index}) => (
    //         <View style={{...commonStyles._center, }}>
    //           <Text>{item}</Text>
    //         </View>
    //       )}
    //       keyExtractor={(index) => index.toString()}
    //     />
    //   }
    // </TouchableOpacity>