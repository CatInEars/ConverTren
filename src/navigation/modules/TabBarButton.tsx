import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { connect } from 'react-redux';

function tabBarButton({ 
  tabBarIcon, 
  isFocused, 
  title,
  theme
}: any) {
  const Icon = tabBarIcon;
  const focused = isFocused();

  return (
    <>
      <View
        style={{ width: 25, height: 25}}
      >
        <Icon 
          fill={
            focused ? 
              (theme === 'DARK' ? 'white' : 'black') 
            : 
              '#666666'
          } 
        />
      </View>

      {
        focused ?
        <View>
          <Text style={commonStyles.infoText}>{title}</Text>
        </View>
        :
        null
      }
    </>
  );
}

export const TabBarButton = connect(
  (state: IState) => ({
    theme: state.theme
  }) 
)(tabBarButton);