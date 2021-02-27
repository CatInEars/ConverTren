import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { getRandom } from '../../modules/getRandom';
import { quoteArr } from '../../modules/quoteArr';

export function Quote() {
  const [randomQuote, setRandomQuote] = useState(
    getRandom(0, quoteArr.length)
  );

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
          {quoteArr[randomQuote].quote}
        </Text>
      </View>

      <View
        style={{alignItems: 'flex-end', marginTop: 12}}
      >
        <Text
          style={commonStyles.trenQuoteText}
        >
          {quoteArr[randomQuote].author}
        </Text>
      </View>
    </View>
  );
}