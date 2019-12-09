import React from 'react';
import PropTypes from 'prop-types';
// import { withNavigation } from 'react-navigation';
import {
  View, Text,
} from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import styles from './styles';
// import { connect } from 'react-redux';

const ShowTimeItem = ({
  time,
  ticketURL,
}) => (
  <View>
    <Text style={styles.title}>{time}</Text>
    <Hyperlink linkDefault>
      <Text style={styles.subtitle}>{ticketURL}</Text>
    </Hyperlink>
  </View>
);

ShowTimeItem.propTypes = {
  time: PropTypes.string.isRequired,
  ticketURL: PropTypes.string.isRequired,
};

export default ShowTimeItem;
