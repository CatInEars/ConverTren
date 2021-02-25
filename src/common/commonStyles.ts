import { StyleSheet } from 'react-native';

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
  }
});