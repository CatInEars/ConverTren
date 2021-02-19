import React from 'react';
import { Text, Animated } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { IRoute } from './CustomTabBar';
import Ripple from 'react-native-material-ripple';

export function TabBarButton({ 
  tabBarIcon, 
  isFocused, 
  title, 
  navigation, 
  routeName
}: IRoute) {
  const Icon = tabBarIcon;
  const focused = isFocused();

  return (
    <Ripple
      rippleDuration={450}
      rippleColor='#707070'
      rippleOpacity={0.5}
      style={commonStyles.tabNavigatorButton}
      onPress={() => navigation.navigate(routeName)}
    >
      <>
        <Animated.View 
          style={{ width: 30, height: 30}}
        >
          <Icon fill={focused ? 'white' : '#666666'} />
        </Animated.View>
        {
          focused ?
          <Animated.View>
            <Text style={commonStyles.infoText}>{title}</Text>
          </Animated.View>
          :
          null
        }
      </>
    </Ripple>
  );
}