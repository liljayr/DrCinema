import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  View, Text, TouchableOpacity,
} from 'react-native';

const CinemaItem = ({
  id,
  name,
  website,
  navigation: { navigate },
}) => (
  <TouchableOpacity
    onPress={() => navigate('Cinema', { selectedCinemaId: id })}
  >
    <View>
      <Text>{name}</Text>
      <Text>{website}</Text>
    </View>
  </TouchableOpacity>
);

CinemaItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(CinemaItem);
