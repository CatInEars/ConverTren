import React from 'react';
import { Animated } from 'react-native';
import { screenWidth } from '../../common/commonStyles';

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
          height: 10, 
          backgroundColor: 'orange',
        }
      }
    />
  );
}