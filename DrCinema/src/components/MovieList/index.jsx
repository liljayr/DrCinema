import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ListItem from '../MovieItem/index';

const MovieList = ({
  movies,
}) => (
  <View>
    <FlatList
      numColumns={2}
      data={movies}
      renderItem={({
        item: {
          id, name, thumbnail, year, genre,
        },
      }) => (
        <ListItem
          id={id}
          name={name}
          thumbnail={thumbnail}
          year={year}
          genre={genre}
        />
      )}
    />
  </View>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieList;
