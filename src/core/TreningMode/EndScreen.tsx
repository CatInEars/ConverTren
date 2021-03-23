import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

interface IProps {
  procentArr: number[]
}

export function EndScreen({
  procentArr
}: IProps) {
  let average = 0;
  procentArr.forEach(item => {
    average += item;
  });
  average /= procentArr.length;

  return (
    <View>
      <Text>End</Text>
      <Text>{Math.round(average)}%</Text>
    </View>
  );
}