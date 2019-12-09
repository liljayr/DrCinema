import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
// import { connect } from 'react-redux';

const CinemaItem = ({
  id,
  name,
  website,
  navigation: { navigate },
}) => (
  <TouchableOpacity
    onPress={() => navigate('CinemaDetails', { selectedCinemaId: id })}
  >
    <View>
      <Text>{name}</Text>
      <Text>{website}</Text>
      {' '}
//would be better to use hyperlink
    </View>
  </TouchableOpacity>
);

CinemaItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default CinemaItem;
