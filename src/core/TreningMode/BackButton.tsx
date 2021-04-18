import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { Back } from '../svgs/TreningMode/Back';

interface IProps {
  theme: ITheme
}

export function BackButton({ theme }: IProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={commonStyles.trenModeBackButton}
      onPress={navigation.goBack}
    >
      <Back
        fill='gray'
      />
    </TouchableOpacity>
  );
}