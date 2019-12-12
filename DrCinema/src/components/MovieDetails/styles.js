import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 40,
  },
  image: {
    width: winWidth * 0.60,
    height: winHeight * 0.45,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    margin: 10,
  },
  paragraph: {
    textAlign: 'center',
    margin: 5,
  },
});
