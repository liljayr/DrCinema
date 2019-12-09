import React from 'react';
import PropTypes from 'prop-types';
// import { withNavigation } from 'react-navigation';
import {
  View, Text,
} from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import styles from './styles';
// import { connect } from 'react-redux';

const UpcomingItem = ({
  id,
  name,
  thumbnail,
  releaseDate,
}) => (
  <View>
    <Text style={styles.title}>{time}</Text>
    <Hyperlink linkDefault>
      <Text style={styles.subtitle}>{ticketURL}</Text>
    </Hyperlink>
  </View>
);

UpcomingItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default UpcomingItem;
