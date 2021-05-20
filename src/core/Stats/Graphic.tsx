import React from 'react';
import { View } from 'react-native';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts'
import { connect } from 'react-redux';

interface IProps {
  data: number[]
}

function graphic({ data }: IProps) {

  const contentInset = { top: 20, bottom: 20 }

  return (
      <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
              data={data}
              contentInset={contentInset}
              svg={{
                  fill: 'grey',
                  fontSize: 10
              }}
              numberOfTicks={7}
              formatLabel={(value: number) => `${value}%`}
              max={100}
              min={40}
              width={100}
          />
          <LineChart
              style={{ flex: 1, marginLeft: 16 }}
              data={data}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
              contentInset={contentInset}
          >
              <Grid />
          </LineChart>
      </View>
  )
}

export const Graphic = connect(
  (state: IState) => ({
    data: state.statsAsw
  })
)(graphic);