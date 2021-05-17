import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { Picture } from './Picture';

export function NoStats() {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <Picture />
      <View style={{flexDirection: 'column'}}>
        <View>
          <Text style={commonStyles.noFoundTitle}>
            Тут пусто!
            </Text>
        </View>

        <View style={{width: '85%'}}>
          <Text style={commonStyles.noFoundText}>
            Но не всё потеряно, пройди тренировку что бы открыть экран статистики
          </Text>
        </View>
      </View>
    </>
  );
}