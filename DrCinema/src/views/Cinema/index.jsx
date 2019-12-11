import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CinemaDetails from '../../components/CinemaDetails';
import MovieList from '../../components/MovieList';
import { getMovies } from '../../services/APIServices';
import initializeMovies from '../../actions/movieActions';

class Cinema extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const cinemaId = navigation.getParam('cinemaId', -1);
    this.state = {
      cinemaId,
      cinema: {
        name: 'TempName',
        description: 'TempDescription',
        address: 'TempAddress',
        phone: '111-1111',
        website: 'TempWebsite.com',
      },
      movies: [],
    };
  }

  async componentDidMount() {
    const { initializeMoviesState, movies } = this.props;
    if (movies.length < 1) {
      initializeMoviesState(await getMovies());
    }
  // TODO: get Theater:  Name, Description, Complete address, Phone, Website
  // TODO: get Movies
  }

  render() {
    const { cinema, movies } = this.state;
    return (
      <View>
        <View>
          <Text>
            Cinema Details
          </Text>
          <CinemaDetails cinema={cinema} />
        </View>
        <View>
          <Text>
            List Of Movies Showing
          </Text>
          <MovieList movies={movies} />
        </View>
      </View>
    );
  }
}

Cinema.propTypes = {
  initializeMoviesState: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, {
  initializeMoviesState: initializeMovies,
})(Cinema);
