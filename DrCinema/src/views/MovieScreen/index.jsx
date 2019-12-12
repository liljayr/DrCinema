import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieDetails from '../../components/MovieDetails';

class MovieScreen extends React.Component {
  Constructor(props) {
    const { navigation } = this.props;
    const cinemaId = navigation.getParam('cinemaId', -1);
    const movieId = navigation.getParam('movieId', -1);
    this.state = {
      cinemaId,
      movieId,
    };
  }

  render() {
    return (
      <View>
        <MovieDetails />
      </View>
    );
  }
}

MovieScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, {})(MovieScreen);
