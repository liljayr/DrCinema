import React from 'react';
import PropTypes from 'prop-types';
// import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import defaultStyles from '../../styles';

const UpcomingItem = ({
  name,
  thumbnail,
  releaseDate,
  trailer,
  hasTrailer,
  onOpenTrailer,
}) => (
  <View style={[defaultStyles.listContainer, { flexDirection: 'row' }]}>
    <Image
      source={{ uri: thumbnail }}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{name}</Text>
      <Text>
        Release Date:
        {releaseDate}
      </Text>
    </View>
    <TouchableOpacity
      onPress={() => onOpenTrailer(trailer)}
      disabled={!hasTrailer}
      style={[{ opacity: hasTrailer ? 1 : 0.5 }, styles.trailerContainer]}
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
