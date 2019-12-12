import React from 'react';
// import { withNavigation } from 'react-navigation';
import {
  View, Image, FlatList, Linking,
} from 'react-native';
import { Text, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const MovieDetails = ({ movie, showtimes }) => (
  <View>
    <View>
      <Text h1 style={styles.title}>{movie.name}</Text>
    </View>
    <View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: movie.thumbnail }}
      />
    </View>
    <View>
      <Text style={styles.paragraph}>{movie.plot}</Text>
    </View>
    <View>
      <Text>
        {movie.duration}
        {' minutes'}
      </Text>
    </View>
    <View>
      <Text>{movie.yof}</Text>
    </View>
    <View>
      <Text>{movie.genres}</Text>
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
