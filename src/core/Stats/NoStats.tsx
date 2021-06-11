import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { localization } from '../../modules/localization/localization';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { Picture } from './Picture';

interface IProps {
  lang: ILanguage
}

function noStats({ lang }: IProps) {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <Picture />
      <View style={{flexDirection: 'column'}}>
        <View>
          <Text style={commonStyles.bannerTitle}>
            {localization.statsScreen.noStats.title[lang]}
          </Text>
        </View>

        <View style={{width: '85%'}}>
          <Text style={commonStyles.bannerText}>
            {localization.statsScreen.noStats.desc[lang]}
          </Text>
        </View>
      </View>
    </>
  );
}

export const NoStats = connect(
  (state: IState): IProps => ({
    lang: state.localization
  })
)(noStats);