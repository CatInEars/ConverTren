import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { localization } from '../../modules/localization/localization';

interface IProps {
  nextPage: () => void,
  lang: ILanguage
}

export function NextPage({ nextPage, lang }: IProps) {
  const bottom = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(bottom, {
      toValue: 1,
      damping: 10,
      useNativeDriver: false
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...commonStyles.trenModeNextPageContainer,
        bottom: bottom.interpolate({
          inputRange: [0, 1],
          outputRange: [-100, 20]
        })
      }}
    >
      <TouchableHighlight onPress={nextPage}>
        <View style={commonStyles.trenModeNextPage}>
          <Text style={commonStyles.trenModeNextPageText}>
            {localization.treningMode.nextPage[lang]}
          </Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
}