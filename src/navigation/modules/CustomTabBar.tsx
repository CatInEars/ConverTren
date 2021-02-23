import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { getRouteArr } from '../../modules/navigation/getRouteArr';
import { TabBarButton } from './TabBarButton';
import Ripple from 'react-native-material-ripple';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

export function CustomTabBar({ state, descriptors, navigation }: any) {
  const [routreArr, setRouteArr] = useState(
    getRouteArr(descriptors, state)
  );
  const { theme } = useContext(ThemeContext);

  return (
    <View 
      style={{
        ...commonStyles.tabNavigatorContainer,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >

      {routreArr.map((item: any, index) => {
        const focused = item.isFocused();
        
        return (
          <Ripple
            rippleDuration={450}
            rippleColor='#707070'
            rippleOpacity={0.5}
            style={commonStyles.tabNavigatorButton}
            onPress={() => navigation.navigate(item.routeName)}
            key={index.toString()}
          >
            <TabBarButton 
              {...item}
              focused={focused}
            />
          </Ripple>
        )
      })}
    </View>
  );
}