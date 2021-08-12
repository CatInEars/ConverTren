import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { ProfileImage } from './ProfileImage';
import { SettingsButton } from './SettingsButton';

export function Profile() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <View style={{
      ...commonStyles.profileScreen,
      backgroundColor: getBGCWithTheme(theme)
    }}>

      <View style={commonStyles.profileTittleContainer}>

        <ProfileImage />

        <View style={{paddingLeft: 24}}>
          <Text 
              style={{
                color: getTextColorWithTheme(theme),
                ...commonStyles.profileName
              }}
            >
            CatInEars
          </Text>

          <SettingsButton />
        </View>

      </View>
        
    </View>
  );
}