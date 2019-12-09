import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import CinemaDetails from '../../components/CinemaDetails';
import MovieList from '../../components/MovieList';

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

  componentDidMount() {
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
export default Cinema;
