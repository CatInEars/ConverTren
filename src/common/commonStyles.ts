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
    height: 60,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  stackHeaderTitle: {
    paddingTop: 8,
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
    flex: 1,
    paddingTop: 16
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
    fontSize: 26,
    fontFamily: 'OpenSans-Regular'
  },
  trenModeInputContainer: {
    width: '80%',
    height: 45, 
    marginTop: 24,
    position: 'relative',
  },
  treningScreenInput: {
    width: '90%',
    height: '100%',
    paddingHorizontal: 12,
    fontFamily: 'OpenSans-Regular'
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
  },
  trenModeSelectContainer: {
    width: '70%',
    height: 37,
    borderRadius: 16,
    marginTop: 20
  },
  trenModeSelect: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  },
  trenModeSelectText: {
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-SemiBold',
    color: 'white'
  },
  trenModeDataContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  trenModeBackButton: {
    position: 'absolute',
    left: '5%',
    top: '5%'
  },
  trenModeNextPageContainer: {
    width: '80%',
    height: 45,
    position: 'absolute',
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden'
  },
  trenModeNextPage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#58a6ff'
  },
  trenModeNextPageText: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-Regular'
  },
  trenModeAccuracyContainer: {
    width: '100%',
    marginTop: 24,
    alignItems: 'center'
  },
  trenModeAccuracyText: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular'
  },
  trenModeInputCurrencySymbol: {
    position: 'absolute',
    right: '5%',
    top: '25%',
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',
    color: 'gray'
  },
  endScreenButtonsContainer: {
    position: 'absolute',
    width: '80%',
    bottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  endScreenButtonText: {
    color: 'gray',
    fontFamily: 'OpenSans-Regular',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  endScreenButtonContainer: {
    height: 45,
    borderRadius: 8,
    overflow: 'hidden'
  },
  trenModeRestartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#58a6ff'
  },
  trenModeRestartText: {
    color: 'white'
  },
  endScreenTitle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22
  },
  endScreenAverage: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginTop: 18
  },
  easterEggContainer: {
    position: 'absolute', 
    top: 90, 
    right: -25,
    transform: [
      {rotate: '-90deg'}
    ]
  },
  easterEggText: {
    fontSize: 10, 
    color: 'lightgray',
  },
  bannerTitle: {
    fontSize: 24,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    color: 'darkgray'
  },
  bannerText: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'darkgray'
  },
  statsDescriptionContainer: {
    height: 45,
    marginTop: 28,
    alignItems: 'center',
    flexDirection: 'row',
  },
  statsCube: {
    width: 37,
    height: 37,
    borderRadius: 4
  },
  statsDescriptionTextContainer: {
    marginLeft: 18,
  },
  statsDescriptionTitle: {
    fontFamily: 'OpenSans-SemiBold'
  },
  statsDescriptionText: {
    fontFamily: 'OpenSans-Regular'
  },
  statsDescriptionCount: {
    position: 'absolute',
    right: 8,
  },
  profileScreen: {
    padding: 24,
    flex: 1
  },
  profileImage: {
    width: 100, 
    height: 100, 
    backgroundColor: 'skyblue',
    borderRadius: 50
  },
  profileTittleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    marginBottom: 8
  },
  settingsScreenParamsContainer: {
    height: 45, 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  settingsScreenParamItem: {
    width: '40%', 
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingsScreenParamText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16
  },
  selectScrollContainer: {
    width: '100%', 
    position: 'absolute',
    zIndex: 2,
    top: '130%', 
    maxHeight: 160, 
    borderStyle: 'solid', 
    borderWidth: 1, 
    borderColor: '#e5e5e5',
    borderRadius: 8
  },
  selectBannerContainer: { 
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    borderRadius: 8
  },
  selectScrollItem: {
    height: 50, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderStyle: 'solid', 
    borderBottomWidth: 1, 
    borderBottomColor: '#e5e5e5'
  }
});