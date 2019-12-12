import React from 'react';
import PropTypes from 'prop-types';
// import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';
// import { connect } from 'react-redux';

const MovieItem = ({
  id,
  name,
  thumbnail,
  year,
  genres,
  navigation: { navigate },
}) => (
  <TouchableOpacity
    onPress={() => navigate('MovieDetails', { selectedMovieId: id })}
  >
    <View>
      <Image source={{ uri: thumbnail }} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{year}</Text>
      <Text style={styles.subtitle}>{genres}</Text>
      {' '}
    </View>
  </TouchableOpacity>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default MovieItem;
