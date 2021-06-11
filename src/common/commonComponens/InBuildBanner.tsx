import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { InBuildIcon } from '../../core/svgs/others/InBuildIcon';
import { localization } from '../../modules/localization/localization';
import { commonStyles } from '../commonStyles';

interface IProps {
  lang: ILanguage
}

function inBuildBanner({ lang }: IProps) {
  return (
    <View style={commonStyles._center}>

      <InBuildIcon />

      <View style={{marginTop: 18}}>
        <Text style={commonStyles.bannerTitle}>
          {localization.inBuild.title[lang]}
        </Text>
      </View>

      <View style={{width: '85%'}}>
        <Text style={commonStyles.bannerText}>
          {localization.inBuild.descr[lang]}
        </Text>
      </View>
    </View>
  );
}

export const InBuildBanner = connect(
  (state: IState): IProps => ({
    lang: state.localization
  })
)(inBuildBanner);