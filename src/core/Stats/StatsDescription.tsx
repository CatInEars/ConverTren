import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { localization } from '../../modules/localization/localization';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

interface IProps {
  data: IPieData[],
  lang: ILanguage
}

function statsDescription({ data, lang }: IProps) {
  const { theme } = useContext(ThemeContext);
  const textColor = getTextColorWithTheme(theme)

  return (
    <View style={{width: '80%'}}>
      {
        data.map((item) => (
          <View 
            style={commonStyles.statsDescriptionContainer}
            key={item.key}
          >
            <View 
              style={{
                ...commonStyles.statsCube,
                backgroundColor: item.svg.fill
              }}
            />

            <View 
              style={commonStyles.statsDescriptionTextContainer}
            >
              <Text 
                style={{
                  ...commonStyles.statsDescriptionTitle,
                  color: textColor
                }}
              >
                {localization.statsScreen.statsDescr[item.key.replace('pie-', '')][lang]}
              </Text>

              <Text 
                style={{
                  ...commonStyles.statsDescriptionText,
                  color: textColor
                }}
              >
                {localization.statsScreen.statsDescr.accuracy[lang]} {item.accuracy}
              </Text>
            </View>

            <View
              style={commonStyles.statsDescriptionCount}
            >
              <Text
                style={{
                  color: textColor
                }}
              >
                {item.value}
              </Text>
            </View>
          </View>
        ))
      }
    </View>
  );
}

export const StatsDescription = connect(
  (state: IState) => ({
    lang: state.localization
  })
)(statsDescription);