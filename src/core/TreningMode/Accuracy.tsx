import React from 'react';
import { View, Text } from 'react-native';

interface IProps {
  procent: string
}

export function Accuracy({ procent }: IProps) {
  return (
    <Text>{`${procent}%`}</Text>
  );
}