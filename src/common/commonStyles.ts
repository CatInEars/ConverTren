import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
  _center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabNavigatorContainer: {
    borderTopColor: 'gray',
    borderTopWidth: 2,
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
  infoText: {
    
  },
  stackHeader: {
    width: '100%', 
    height: 70,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  stackHeaderTitle: {
    fontSize: 24,
  },
  trenScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 196
  },
  trenLogoText: {
    fontSize: 36
  },
  trenStatsTextContainer: {
    marginTop: 12,
    alignItems: 'center'
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
    fontSize: 16
  },
  trenQuoteContainer: {
    marginTop: 48
  },
  trenQuoteText: {
    color: 'gray',
    fontSize: 12
  }
});