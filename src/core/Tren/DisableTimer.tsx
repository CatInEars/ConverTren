import React, { Dispatch, useContext } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { localization } from '../../modules/localization/localization';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import CheckBox from '@react-native-community/checkbox';

interface IProps {
  timerNeed: boolean,
  onChangeTimerNeed: (value: boolean) => void,
  lang: ILanguage
}

function disableTimer({
  timerNeed,
  onChangeTimerNeed,
  lang
}: IProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 8,
        width: 120,
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
    >
      <Text
        style={{
          color: getTextColorWithTheme(theme),
          ...commonStyles.trenTimerText
        }}
      >
        {localization.TrenScreen.disableTimer[lang]}
      </Text>
      <CheckBox
        value={timerNeed}
        onValueChange={value => onChangeTimerNeed(value)}
      />
    </View>
  );
}

export const DisableTimer = connect(
  (state: IState) => ({
    timerNeed: state.timerNeed,
    lang: state.localization
  }),
  (dispatch: Dispatch<IChangeTimerNeed>) => ({
    onChangeTimerNeed: (value: boolean) => {
      dispatch({type: 'CHANGE_TIMER_NEED', value})
    }
  }) 
)(disableTimer);