import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDetails from '../../components/MovieDetails';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const movieId = navigation.getParam('movieId', -1);
    this.state = {
      movieId,
      movie: {
        title: 'tmpName',
      },
    };
  }

  render() {
    const { movie } = this.state;
    return (
      <View>
        <Text>
          Movie Details
        </Text>
        <MovieDetails movie={movie} />
      </View>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default Movie;
