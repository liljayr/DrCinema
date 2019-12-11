import React from 'react';
import {
  WebView, View, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';


const Trailer = ({
  isOpen,
  closeModal,
  url,
}) => (

  <Modal
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <View
      style={styles.youtube}
    >
      <WebView
        style={styles.youtube}
        javaScriptEnabled
        domStorageEnabled
        source={{ uri: url === 'No trailer' ? 'https://www.youtube.com/embed/YE7VzlLtp-4' : url }}
      />
    </View>
  </Modal>
);


Trailer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default Trailer;


// <WebView
//   javaScriptEnabled
//   domStorageEnabled
//   source={{ uri: url === 'No trailer' ? 'https://www.youtube.com/embed/YE7VzlLtp-4' : url }}
// />
