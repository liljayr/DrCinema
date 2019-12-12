import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ListItem from '../MovieItem/index';

const MovieList = ({
  cinemaMovies,
  cinemaId,
}) => (
  <View>
    <FlatList
      numColumns={2}
      data={cinemaMovies}
      renderItem={({
        item: {
          id, name, thumbnail, yof, genres,
        },
      }) => (
        <ListItem
          id={id}
          name={name}
          thumbnail={thumbnail}
          year={yof}
          genres={genres}
          cinemaId={cinemaId}
        />
      )}
      keyExtractor={(movie) => movie.id.toString()}
    />
  </View>
);

MovieList.propTypes = {
  cinemaMovies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    yof: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  cinemaId: PropTypes.number.isRequired,
};

export default MovieList;
