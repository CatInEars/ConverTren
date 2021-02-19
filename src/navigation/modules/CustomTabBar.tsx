import React, { useState } from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { getRouteArr } from '../../modules/navigation/getRouteArr';
import { TabBarButton } from './TabBarButton';

export interface IRoute {
  routeName: string,
  title: string,
  tabBarIcon: any,
  isFocused: () => boolean,
  navigation: any
}

export function CustomTabBar({ state, descriptors, navigation }: any) {
  const [routreArr, setRouteArr] = useState(
    getRouteArr(descriptors, state)
  );

  return (
    <View style={commonStyles.tabNavigatorContainer}>
      {routreArr.map((item: IRoute, index) => (
        <TabBarButton 
          {...item} 
          navigation={navigation} 
          key={index.toString()} 
        />
      ))}
    </View>
  );
}