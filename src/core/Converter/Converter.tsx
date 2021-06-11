import React, { useContext } from 'react';
import { View } from 'react-native';
import { InBuildBanner } from '../../common/commonComponens/InBuildBanner';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

export function Converter() {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{
      ...commonStyles._center,
      backgroundColor: getBGCWithTheme(theme)
    }}>
      <InBuildBanner />
    </View>
  );
}