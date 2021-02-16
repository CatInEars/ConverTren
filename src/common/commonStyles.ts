import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  _center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d242f',
  },
  tabNavigatorContainer: {
    backgroundColor: '#1d242f',
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
    color: 'white'
  }
});