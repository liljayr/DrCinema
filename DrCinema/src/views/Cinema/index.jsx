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
  // TODO: get Theater:  Name, Description, Complete address, Phone, Website
  // TODO: get Movies
  }

  async getTheseMovies() {
    const { cinemaId } = this.state;
    const { movies } = this.props;
    const thisCinema = [];
    let tempArr = [];
    let count = 0;
    for (let i = 0; i < movies.length; i += 1) {
      const { showtimes } = movies[i];
      tempArr = showtimes.filter((show) => show.cinema.id === cinemaId);
      // tempShows.push(tempArr);
      // tempMovies[count] = movies[i];
      if (tempArr) {
        const tempMovie = movies[i];
        const movieObj = {
          id: tempMovie.id,
          name: tempMovie.name,
          thumbnail: tempMovie.thumbnail,
          yof: tempMovie.yof,
          genre: tempMovie.genre,
        };
        thisCinema[count] = movieObj;
        count += 1;
      }
      // let ID = movies[i]['showtimes'][]
      // movies[i];
      // thumbnail, name, release year (yof), genre
    }
    return thisCinema;
  }

  filterByShow(item) {
    const { cinemaId } = this.state;
    if (cinemaId === item.cinema.id) {
      return true;
    }

    return false;
  }

  render() {
    const { selectedCinema } = this.state;
    return (
      <View>
        <View>
          <Text>
            Cinema Details
          </Text>
          <CinemaDetails cinema={selectedCinema} />
        </View>
        <View>
          <Text>
            List Of Movies Showing
          </Text>
        </View>
      </View>
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
