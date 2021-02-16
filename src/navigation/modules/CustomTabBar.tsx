import React, { useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { getRouteArr } from '../../modules/navigation/getRouteArr';

interface IRoute {
  routeName: string,
  title: string,
  tabBarIcon: any
}

export function CustomTabBar({ state, descriptors, navigation }: any) {
  const [routreArr, setRouteArr] = useState(
    getRouteArr(descriptors, state)
  );

  return (
    <View style={commonStyles.tabNavigatorContainer}>
      {routreArr.map((item: IRoute, index) => {
        const Icon = item.tabBarIcon;

        return (
          <TouchableHighlight
            style={commonStyles.tabNavigatorButton}
            onPress={() => navigation.navigate(item.routeName)}
            key={index.toString()}
          >
            <>
              <Icon color='white' />
              <Text style={commonStyles.infoText}>{item.title}</Text>
            </>
          </TouchableHighlight>
        )
      })}
    </View>
  );
}