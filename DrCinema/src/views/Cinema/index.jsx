import React from 'react';
import { View, ScrollView } from 'react-native';
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
      selectedCinema: {},
      cinemaMovies: [],
    };
  }

  async componentDidMount() {
    const {
      initializeMoviesState,
      movies,
    } = this.props;
    if (movies.length < 1) {
      initializeMoviesState(await getMovies());
    }
    const { cinemas } = this.props;
    const { cinemaId } = this.state;
    for (let i = 0; i < cinemas.length; i += 1) {
      if (cinemaId === cinemas[i].id) {
        this.setState({ selectedCinema: cinemas[i] });
      }
    }
    const movieList = await this.getTheseMovies();
    this.setState({ cinemaMovies: movieList });
  }

  async getTheseMovies() {
    const { cinemaId } = this.state;
    const { movies } = this.props;
    const results = [];
    for (let i = 0; i < movies.length; i += 1) {
      for (let j = 0; j < movies[i].showtimes.length; j += 1) {
        if (movies[i].showtimes[j].cinema.id === cinemaId) {
          results.push(movies[i]);
        }
      }
    }
    return results;
  }

  render() {
    const { selectedCinema, cinemaMovies, cinemaId } = this.state;
    return (
      <ScrollView>
        <View>
          <CinemaDetails cinema={selectedCinema} />
          <MovieList
            cinemaMovies={cinemaMovies}
            cinemaId={cinemaId}
          />
        </View>
      </ScrollView>
    );
  }
}

Cinema.propTypes = {
  initializeMoviesState: PropTypes.func.isRequired,
  cinemas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,

  })).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    showtimes: PropTypes.arrayOf(PropTypes.shape({
      cinema: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    })).isRequired,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  cinemas: state.cinemas,
  movies: state.movies,
});

export default connect(mapStateToProps, {
  initializeMoviesState: initializeMovies,
})(Cinema);
