import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { quoteArr } from '../../modules/quoteArr';

export function Quote() {
  return (
    <View
      style={commonStyles.trenQuoteContainer}
    >
      <View>
        <Text
          style={{
            ...commonStyles.trenQuoteText,
            fontStyle: 'italic'
          }}
        >
          {quoteArr[1].quote}
        </Text>
      </View>

      <View
        style={{alignItems: 'flex-end', marginTop: 12}}
      >
        <Text
          style={commonStyles.trenQuoteText}
        >
          {quoteArr[1].author}
        </Text>
      </View>
    </View>
  );
}