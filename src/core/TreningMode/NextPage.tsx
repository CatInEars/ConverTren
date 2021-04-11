import React from 'react';
import { Button } from 'react-native';

interface IProps {
  nextPage: () => void
}

export function NextPage({ nextPage }: IProps) {
  return (
    <Button
      title="NEXT PAGE"
      onPress={nextPage}
    />
  );
}