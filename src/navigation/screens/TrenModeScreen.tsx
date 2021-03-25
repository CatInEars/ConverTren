import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Alert, Button } from 'react-native';
import { TreningMode } from '../../core/TreningMode/TreningMode';

export function TrenModeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();

      Alert.alert(
        'Уже всё?',
        'Если вы выйдете, то прогресс урока пропадет, вы уверены, что хотите выйти?',
        [
          { 
            text: "Остаться", 
            style: 'cancel', 
            onPress: () => {} 
          },
          {
            text: 'Уйти',
            style: 'destructive',
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]
      );
    });
  });

  return (
    <>
      <TreningMode />
      <Button
        title="BACK"
        onPress={navigation.goBack}
      />
    </>
  );
}