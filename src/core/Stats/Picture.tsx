import React from 'react';
import { View } from 'react-native';
import { Astronaut } from '../svgs/Space/Astronaut';
import { Star } from '../svgs/Space/Star';

export function Picture() {
  return (
    <View 
      style={{
        width: 300, 
        height: 300,
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
      <Astronaut />
      <Star />
    </View>
  );
}