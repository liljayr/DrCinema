import React from 'react';
import PropTypes from 'prop-types';
// import { withNavigation } from 'react-navigation';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import styles from './styles';
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
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.web}>{website}</Text>
      {' '}
//would be better to use hyperlink
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

export default CinemaItem;
