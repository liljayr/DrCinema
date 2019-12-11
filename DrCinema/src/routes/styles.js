import { StyleSheet } from 'react-native';
import { baseColor } from '../styles/colors';


export default StyleSheet.create({
  navBar: {
    backgroundColor: baseColor,
  },
  navContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
