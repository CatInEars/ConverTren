import React from 'react';
import { Animated } from 'react-native';
import { screenWidth } from '../../../common/commonStyles';

interface IProps {
  timerValue: any
} 

export function Timer({
  timerValue
}: IProps) {
  
  return (
    <Animated.View
      style={
        {
          transform: [{ 
            translateX: timerValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -screenWidth]
            }) 
          }],
          width: '100%',
          height: 22, 
          backgroundColor: timerValue.interpolate({
            inputRange: [0, 0.6, 1],
            outputRange: ['#15C160', 'orange', 'red']
          }) ,
          position: 'absolute',
          bottom: 0,
          borderRadius: 6
        }
      }
    />
  );
}