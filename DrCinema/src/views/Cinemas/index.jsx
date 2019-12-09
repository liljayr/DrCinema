import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies, getUpcomingMovies, getCinemas } from '../../services/APIServices';
import { initializeMovies } from '../../actions/movieActions';

class Cinemas extends React.Component {
  async componentDidMount() {
    const { initializeMovieState } = this.props;
    const movies = await getMovies();
    console.log(initializeMovieState(movies));
  }

  render() {
    return (
      <View>
        <Text>
          Cinemas
        </Text>
      </View>
    );
  }
}

Cinemas.propTypes = {
  initializeMovieState: PropTypes.func.isRequired,
};

export default connect(null, {
  initializeMovieState: initializeMovies,
})(Cinemas);
