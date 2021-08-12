import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';

export function SettingsButton() {
  const { navigate } = useNavigation();

  return (
    <Button
      title="Open Settings"
      onPress={() => navigate('Settings')}
    />
  );
}