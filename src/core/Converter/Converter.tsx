import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function Converter() {
  return (
    <View style={commonStyles._center}>
      <Text style={commonStyles.infoText}>Converter Text</Text>
    </View>
  );
}