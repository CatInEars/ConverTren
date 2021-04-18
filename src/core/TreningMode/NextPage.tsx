import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';

interface IProps {
  nextPage: () => void
}

export function NextPage({ nextPage }: IProps) {
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
            Next Page
          </Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
}