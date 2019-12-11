import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  youtube: {
    height: winWidth - 100,
    width: winWidth,
  },
});
