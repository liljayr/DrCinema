import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
// import { connect } from 'react-redux';

const MovieItem = ({
  id,
  name,
  thumbnail,
  year,
  genre
  navigation: { navigate },
}) => (
  <TouchableOpacity
    onPress={() => navigate('CinemaDetails', { selectedMovieId: id })}
  >
    <View>
      <Text>{name}</Text>
      <Text>{thumbnail}</Text>
      <Text>{year}</Text>
      <Text>{genre}</Text>
      {' '}
    </View>
  </TouchableOpacity>
);

CinemaItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default CinemaItem;
