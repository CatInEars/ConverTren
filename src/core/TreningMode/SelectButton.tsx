import React from 'react';
import { Button } from 'react-native';

interface IProps {
  handleSubmit: () => void,
  isAnswered: string
}

export function SelectButton({
  handleSubmit,
  isAnswered
}: IProps) {
  return (
    <Button
      title='SELECT'
      onPress={handleSubmit}
      disabled={!!isAnswered}
    />
  );
}