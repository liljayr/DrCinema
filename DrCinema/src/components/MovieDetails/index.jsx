import React from 'react';
// import { withNavigation } from 'react-navigation';
import { View, Image, FlatList, Linking } from 'react-native';
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
      <Text>{movie.plot}</Text>
    </View>
    <View>
      <Text>
        {movie.duration}
        {' minutes'}
      </Text>
    </View>
    <View>
      <Text>{movie.yearOfRelease}</Text>
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
          <DisplayShowtimes time={time} url={purchase_url} />
        )}
      />
    </View>
  </View>
);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    yearOfRelease: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  showtimes: PropTypes.arrayOf(PropTypes.shape({
    cinema: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    schedule: PropTypes.arrayOf(PropTypes.shape({
      time: PropTypes.string.isRequired,
      purchase_url: PropTypes.toString.isRequired,
    })).isRequired,
  })).isRequired,
};

function DisplayShowtimes({ time, url }) {
  return (
    <View>
      <View style={{ flex: 1 }}>
        <Text>{time}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button title="Kaupa" onPress={() => Linking.openURL(url)} />
      </View>
    </View>
  );
}

export default MovieDetails;
