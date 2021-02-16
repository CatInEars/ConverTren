import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function Stats() {
  return (
    <View style={commonStyles._center}>
      <Text style={commonStyles.infoText}>Stats Text</Text>
    </View>
  );
}