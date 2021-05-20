import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { Graphic } from './Graphic';
import { NoStats } from './NoStats';

interface IProps {
  answerArr: number[]
}

function stats({ answerArr }: IProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <View 
      style={{
        ...commonStyles._center,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >
      {
        answerArr.length === 0 ?
          <NoStats />
        :
        <Graphic />
      }
    </View>
  );
}

export const Stats = connect(
  (state: IState) => ({
    answerArr: state.statsAsw
  })
)(stats);