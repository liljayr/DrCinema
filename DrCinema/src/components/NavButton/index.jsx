import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  TouchableHighlight, Text,
} from 'react-native';
import styles from './styles';

const NavButton = ({
  title,
  onPress,
}) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.navButton}
  >
    <Text style={styles.navButtonText}>
      {title}
    </Text>
  </TouchableHighlight>
);

NavButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(NavButton);
