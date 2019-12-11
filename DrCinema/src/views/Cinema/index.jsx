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
    const tempMovies = [];
    for (let i = 0; i < cinemas.length; i += 1) {
      if (cinemaId === cinemas[i].id) {
        this.setState({ selectedCinema: cinemas[i] });
      }
    }
    // selectedBoards.filter((board) => board !== id),
    // console.log(this.state.selectedCinema.description);
    // const movies2 = this.props.movies;
    // console.log('movies');
    // console.log(movies2);
    // console.log('length');
    // console.log(movies2.length);
    // for (let i = 0; i < movies2.length; i += i) {
    //   const { showtimes } = movies2[i];
    //   for (let j = 0; j < showtimes.length; j += j) {
    //     const ID = showtimes[i].cinema.id;
    //     console.log('ID');
    //     console.log(ID);
    //     if (cinemaId === ID) {
    //       tempMovies.push(movies2[i]);
    //     }
    //   }
    // }
    // this.setState({ cinemaMovies: tempMovies });
    // console.log('MOVIES HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    // console.log(this.state.cinemaMovies);
  // TODO: get Theater:  Name, Description, Complete address, Phone, Website
  // TODO: get Movies
  }

  /* getMovies() {
    const { cinemaId } = this.state;
    const { movies } = this.props;
    for (let i = 0; i < movies.length; i += i) {
      const showtimes = movies[i];
      for (let j = 0; j < showtimes.length; j += j) {
        const ID = showtimes[i].cinema.id;
        console.log(ID);
        if(cinemaId === ID)
        // showtimes[j];
      }
      // let ID = movies[i]['showtimes'][]
      // movies[i];
    }
  } */

  render() {
    const { selectedCinema } = this.state;
    // this.getMovies();
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
