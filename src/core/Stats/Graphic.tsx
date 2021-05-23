import React from 'react';
import { PieChart } from 'react-native-svg-charts'
import { connect } from 'react-redux';
import { pieDataExample } from '../../modules/other/pieDataExample';

interface IProps {
  data: number[]
}

function graphic(
  { data }: IProps
) {

  const pieData = [...pieDataExample];

  data.forEach(item => {
    if (item >= 98) return pieData[0].value++;
    if (item > 80) return pieData[1].value++;
    if (item > 60) return pieData[2].value++;
    return pieData[3].value++;
  });

  return <PieChart style={{ height: 260, width: 260 }} data={pieData} />
}

export const Graphic = connect(
  (state: IState) => ({
    data: state.statsAsw
  })
)(graphic);