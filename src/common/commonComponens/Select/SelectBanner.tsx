import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { getTextColorWithTheme } from '../../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../../modules/theme/ThemeContext';
import { commonStyles } from '../../commonStyles';

interface ISelectBannerProps {
  activeItem: string | number,
  isShow: boolean,
  setIsShow: (isShow: boolean) => void
}

export function SelectBanner({
  activeItem,
  isShow,
  setIsShow
}: ISelectBannerProps) {

  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={() => setIsShow(!isShow)}
      style={commonStyles.selectBannerContainer}
    >
      <Text
        style={{
          color: getTextColorWithTheme(theme)
        }}
      >
        {activeItem}
      </Text>
    </TouchableOpacity>
  );
}