import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { getRandom } from '../../modules/getRandom';
import { quoteArr } from '../../modules/quoteArr';

interface IProps {
  lang: ILanguage
}

export function Quote({ lang }: IProps) {
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
            fontFamily: 'OpenSans-Italic'
          }}
        >
          {quoteArr[randomQuote].quote[lang]}
        </Text>
      </View>

      <View
        style={{alignItems: 'flex-end', marginTop: 12}}
      >
        <Text
          style={{
            ...commonStyles.trenQuoteText,
            fontFamily: 'OpenSans-SemiBold'
          }}
        >
          {quoteArr[randomQuote].author[lang]}
        </Text>
      </View>
    </View>
  );
}