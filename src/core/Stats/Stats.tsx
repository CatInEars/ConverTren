import React, { useContext } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { Graphic } from './Graphic';
import { NoStats } from './NoStats';
import { StatsDescription } from './StatsDescription';

interface IProps {
  answerArr: number[]
  data: IPieData[]
}

function stats({ answerArr, data }: IProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <View 
      style={{
        ...commonStyles._center,
        backgroundColor: getBGCWithTheme(theme),
        paddingTop: 64
      }}
    >
      {
        answerArr.length === 0 ?
          <NoStats />
        :
        <View 
          style={{
            ...commonStyles._center, 
            width: '100%'
          }}
        >
          <Graphic 
            pieData={data}
          />
          <StatsDescription 
            data={data}
          />
        </View>
      }
    </View>
  );
}

export const Stats = connect(
  (state: IState) => ({
    answerArr: state.statsAsw,
    data: state.sortedAnswers
  })
)(stats);