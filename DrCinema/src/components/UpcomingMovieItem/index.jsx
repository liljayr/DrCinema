import React from 'react';
import PropTypes from 'prop-types';
// import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';
// import { connect } from 'react-redux';

const UpcomingItem = ({
  name,
  thumbnail,
  releaseDate,
  trailer,
  onOpenTrailer,
}) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <Image source={{ uri: thumbnail }} />
    <Text>{releaseDate}</Text>
    <TouchableOpacity
      onPress={() => onOpenTrailer(trailer)}
    >
      <Text>{trailer}</Text>
    </TouchableOpacity>
  </View>
);

UpcomingItem.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
  onOpenTrailer: PropTypes.func.isRequired,
};

export default UpcomingItem;
