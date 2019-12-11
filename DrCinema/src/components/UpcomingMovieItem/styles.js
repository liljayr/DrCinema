import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
  },
  trailerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    textAlign: 'left',
    fontSize: 15,
  },
  image: {
    width: 150,
    height: 150,
  },
  icon: {
    fontSize: 60,
    margin: 20,
  },
});
