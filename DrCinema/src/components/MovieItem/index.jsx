import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';
// import { connect } from 'react-redux';

const MovieItem = ({
  id,
  name,
  thumbnail,
  yof,
  genres,
  cinemaId,
  navigation: { navigate },
}) => (
  <TouchableOpacity
    onPress={() => navigate('Movie', { selectedMovieId: id, currentCinema: cinemaId })}
  >
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: thumbnail }} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{yof}</Text>
        <Text style={styles.subtitle}>{genres}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  yof: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(MovieItem);
