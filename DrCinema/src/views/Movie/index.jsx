import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDetails from '../../components/MovieDetails';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const cinemaId = navigation.getParam('currentCinema', -1);
    const movieId = navigation.getParam('selectedMovieId', -1);
    this.state = {
      cinemaId,
      movieId,
      movie: {},
      showtimes: [],
    };
  }

  async componentDidMount() {
    await this.findMovie();
  }

  async findMovie() {
    const { movieId, cinemaId } = this.state;
    const { movies } = this.props;
    let movie = {};
    for (let i = 0; i < movies.length; i += 1) {
      if (movies[i].id === movieId) {
        movie = movies[i];
        this.setState({ movie: movies[i] });
      }
    }
    for (let i = 0; i < movie.showtimes.length; i += 1) {
      if (movie.showtimes[i].cinema.id === cinemaId) {
        this.setState({ showtimes: movie.showtimes[i] });
      }
    }
  }

  render() {
    const { movie, showtimes } = this.state;
    return (
      <View>
        <Text>
          Movie Details
        </Text>
        <MovieDetails
          movie={movie}
          showtimes={showtimes}
        />
      </View>
    );
  }
}

Movie.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, {})(Movie);
