import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function Tren() {
  return (
    <View style={commonStyles._center}>
      <Text style={commonStyles.infoText}>Tren Text</Text>
    </View>
  );
}