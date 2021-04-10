import { StyleSheet, Dimensions } from 'react-native';

export const { width: screenWidth } = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
  _center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabNavigatorContainer: {
    borderTopColor: 'gray',
    borderTopWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    height: 70,
    flexDirection: 'row'
  },
  tabNavigatorButton: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarButtonText: {
    fontFamily: 'OpenSans-Regular'
  },
  stackHeader: {
    width: '100%', 
    height: 55,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  stackHeaderTitle: {
    fontSize: 24,
    fontFamily: 'OpenSans-Regular'
  },
  trenScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 196
  },
  trenLogoText: {
    fontSize: 36,
    fontFamily: 'OpenSans-Regular'
  },
  trenStatsTextContainer: {
    marginTop: 18,
    alignItems: 'center'
  },
  trenStatsText: {
    fontFamily: 'OpenSans-Regular'
  },
  trenCurrencyValueTextContainer: {
    marginTop: 4
  },
  trenCurrencyValueText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14
  },
  trenStartButtonContainer: {
    marginTop: 32,
    borderRadius: 4
  },
  trenStartButton: {
    backgroundColor: '#58a6ff', 
    width: screenWidth/1.6, 
    height: 48,
    overflow: 'hidden',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  trenStartButtonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular'
  },
  trenTimerText: {
    fontFamily: 'OpenSans-Regular'
  },
  trenQuoteContainer: {
    marginTop: 36
  },
  trenQuoteText: {
    color: 'gray',
    fontSize: 12
  },
  treningModeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  currencyModalContainer: {
    flex: 1
  },
  currencyItemContainer: {
    paddingHorizontal: 28,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center'
  },
  currencyItemTextChar: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16
  },
  currencyItemTextName: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13
  },
  currencyIconContainer: {
    width: 30, 
    height: 30,
    borderRadius: 100, 
    overflow: 'hidden',
    marginRight: 16
  },
  currencyModalTitleContainer: {
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 12
  },
  currencyModalTitleText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20
  },
  treningModeCountText: {
    fontSize: 24
  },
  treningScreenInput: {
    width: '100%',
    height: 60,
    paddingHorizontal: 12,
    marginTop: 24
  },
  trenScreenCurrencyButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  trenScreenCurrencyButton: {
    width: 55, 
    height: 40
  },
  trenScreenConvertIcon: {
    width: 25,
    height: 20
  }
});