import { StyleSheet } from 'react-native';
import { fadedBaseColor } from './colors';

export default StyleSheet.create({
  listContainer: {
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: fadedBaseColor,
  },
  container: {
    flexDirection: 'column',
    padding: 10,
    marginBottom: 10,
  },
  text: {
    textAlign: 'right',
  },
  textContainer: {
    marginBottom: 20,
    borderBottomWidth: 5,
    borderColor: 'steelblue',
    padding: 10,
  },
  innerContainer: {
    borderBottomWidth: 5,
    borderColor: 'steelblue',
    backgroundColor: 'whitesmoke',
  },
});
