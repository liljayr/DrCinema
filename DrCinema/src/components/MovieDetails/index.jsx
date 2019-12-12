import React from 'react';
// import { withNavigation } from 'react-navigation';
import { View, Image, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const MovieDetails = ({ movie, currentCinema }) => (
  <View>
    <View>
      <Text h1 style={styles.title}>{movie.name}</Text>
    </View>
    <View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: movie.image }}
      />
    </View>
    <View>
      <Text h3 style={styles.title}>{movie.plot}</Text>
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
      <Text>movie.genre</Text>
    </View>
    <View>
      <FlatList
        numColumns={1}
        data={movie.showtimes.filter((item) => item.cinema.id === currentCinema)}
        renderItem={({
          item: {
            showtimes, purchase_url,
          },
        }) => (
          <DisplayShowtimes time={showtimes} url={purchase_url} />
        )}
        keyExtractor={(list) => list.id.toString()}
      />
    </View>
  </View>
);

MovieDetails.propTypes = {
  currentCinema: PropTypes.number.isRequired,
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    yearOfRelease: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
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
  }).isRequired,
};

function DisplayShowtimes({ time, url }) {
  return (
    <View>
      <View>
        <Text>{time}</Text>
      </View>
      <View>
        <Text>{url}</Text>
      </View>
    </View>
  );
}

export default MovieDetails;
