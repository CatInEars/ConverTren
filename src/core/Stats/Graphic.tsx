import React from 'react';
import { PieChart } from 'react-native-svg-charts'
import { connect } from 'react-redux';

interface IProps {
  pieData: IPieData[]
}

function graphic({ pieData }: IProps) {

  return (
    <PieChart 
      style={{ height: 260, width: 260, marginBottom: 26, marginTop: -48 }} 
      data={pieData} 
    />
  )
}

export const Graphic = connect(
  (state: IState) => ({
    data: state.statsAsw
  })
)(graphic);