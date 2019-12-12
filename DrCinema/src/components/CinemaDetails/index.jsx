import React from 'react';
// import { withNavigation } from 'react-navigation';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const CinemaDetails = ({ cinema }) => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Text h1 style={styles.title}>{cinema.name}</Text>
    </View>
    <View style={styles.section}>
      <Text>{cinema.description}</Text>
    </View>
    <View style={styles.section}>
      <Text>{cinema.address}</Text>
    </View>
    <View style={styles.section}>
      <Text dataDetectorType="phoneNumber">{cinema.phone}</Text>
    </View>
    <View style={styles.section}>
      <Text dataDetectorType="link">{cinema.website}</Text>
    </View>
  </View>
);
CinemaDetails.propTypes = {
  cinema: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};
export default CinemaDetails;
