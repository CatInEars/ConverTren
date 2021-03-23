import React, { Dispatch, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

interface IProps {
  procentArr: number[],
  sendProcent: (procent: number) => void
}

function endScreen({
  procentArr,
  sendProcent
}: IProps) {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    let res = 0;
    procentArr.forEach(item => {
      res += item;
    });
    res /= procentArr.length;
    sendProcent(average);
    setAverage(res);
  }, [])

  return (
    <View>
      <Text>End</Text>
      <Text>{Math.round(average)}</Text>
    </View>
  );
}

export const EndScreen = connect(
  () => ({}),
  (dispatch: Dispatch<ISendProcent>) => ({
    sendProcent: (procent: number) => {
      dispatch({type: 'SEND_PROCENT', procent})
    }
  })
)(endScreen)