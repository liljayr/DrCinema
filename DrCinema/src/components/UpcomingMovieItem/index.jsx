import React from 'react';
import PropTypes from 'prop-types';
// import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

const UpcomingItem = ({
  name,
  thumbnail,
  releaseDate,
  trailer,
  hasTrailer,
  onOpenTrailer,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <Image source={{ uri: thumbnail }} />
    <Text>{releaseDate}</Text>
    <TouchableOpacity
      onPress={() => onOpenTrailer(trailer)}
      disabled={!hasTrailer}
    >
      <Entypo style={styles.icon} name="video" />
    </TouchableOpacity>
  </View>
);

UpcomingItem.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
  onOpenTrailer: PropTypes.func.isRequired,
  hasTrailer: PropTypes.bool.isRequired,
};

export default UpcomingItem;
