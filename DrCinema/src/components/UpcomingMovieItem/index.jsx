import React from 'react';
import PropTypes from 'prop-types';
// import { withNavigation } from 'react-navigation';
import {
  View, Text, Image,
} from 'react-native';
import styles from './styles';
// import { connect } from 'react-redux';

const UpcomingItem = ({
  name,
  thumbnail,
  releaseDate,
}) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <Image source={{ uri: thumbnail }} />
    <Text>{releaseDate}</Text>
  </View>
);

UpcomingItem.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default UpcomingItem;
