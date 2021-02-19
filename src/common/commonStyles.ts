import { StyleSheet } from 'react-native';
import { globalState } from '../modules/store/globalState';
import { LIGHT } from './themes';

const lightTheme = globalState.getState().theme == LIGHT;

export const commonStyles = StyleSheet.create({
  _center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme ? 'white' : '#1d242f',
  },
  tabNavigatorContainer: {
    backgroundColor: lightTheme ? 'white' : '#1d242f',
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
    color: lightTheme ? 'black' : 'white'
  }
});