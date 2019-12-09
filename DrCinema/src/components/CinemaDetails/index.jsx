import React from 'react';
// import { withNavigation } from 'react-navigation';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const CinemaDetails = ({ cinema }) => (
  <View>
    <View>
      <Text h1 style={styles.title}>{cinema.name}</Text>
    </View>
    <View>
      <Text h3 style={styles.title}>{cinema.description}</Text>
    </View>
    <View>
      <Text>{cinema.address}</Text>
    </View>
    <View>
      <Text dataDetectorType="phoneNumber">{cinema.phone}</Text>
    </View>
    <View>
      <Text dataDetectorType="link">{cinema.website}</Text>
    </View>
  </View>
);
CinemaDetails.propTypes = {
  cinema: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};
export default CinemaDetails;
