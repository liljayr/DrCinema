import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: winWidth,
  },
});
