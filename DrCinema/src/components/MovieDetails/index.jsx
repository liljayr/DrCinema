import React from 'react';
// import { withNavigation } from 'react-navigation';
import {
  View, Image, FlatList, Linking,
} from 'react-native';
import { Text, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';
import styles2 from '../../styles/index';

const MovieDetails = ({ movie, showtimes }) => (
  <View style={styles2.container}>
    <View styles={styles2.innerContainer}>
      <View>
        <Text h1 style={styles.title}>{movie.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: movie.thumbnail }}
        />
      </View>
      <View>
        <Text style={styles.paragraph}>{movie.plot}</Text>
      </View>
      <View style={styles2.textContainer}>
        <Text style={styles2.text}>
          {movie.duration}
          {' minutes'}
        </Text>
        <Text style={styles2.text}>{movie.yof}</Text>
        <Text style={styles2.text}>{movie.genres}</Text>
      </View>
    </View>
    <View>
      <FlatList
        numColumns={1}
        data={showtimes}
        renderItem={({
          item: {
            time, purchase_url,
          },
        }) => (
          <View styleName="horizontal">
            <View style={{ margin: 10 }}>
              <Button title={time} onPress={() => Linking.openURL(purchase_url)} />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.purchase_url.toString()}
      />
    </View>
  </View>
);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    plot: PropTypes.string,
    duration: PropTypes.number,
    yof: PropTypes.string,
    genres: PropTypes.string,
  }),
  showtimes: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string.isRequired,
    purchase_url: PropTypes.toString.isRequired,
  })),
};

MovieDetails.defaultProps = {
  showtimes: [],
  movie: {
    name: '',
    thumbnail: '',
    plot: '',
    duration: 0,
    yof: '',
    genres: '',
  },
};

export default MovieDetails;
