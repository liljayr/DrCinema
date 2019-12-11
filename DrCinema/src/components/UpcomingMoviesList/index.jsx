import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ListItem from '../UpcomingMovieItem/index';

const UpcomingMovieList = ({
  upcoming,
  onOpenTrailer,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={upcoming}
      renderItem={({
        item: {
          id, name, thumbnail, releaseDate, trailer, hasTrailer,
        },
      }) => (
        <ListItem
          id={id}
          name={name}
          thumbnail={thumbnail}
          releaseDate={releaseDate}
          trailer={trailer}
          hasTrailer={hasTrailer}
          onOpenTrailer={onOpenTrailer}
        />
      )}
      keyExtractor={(upcomingM) => upcomingM.id.toString()}
    />
  </View>
);

UpcomingMovieList.propTypes = {
  upcoming: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    hasTrailer: PropTypes.bool.isRequired,
    trailer: PropTypes.string.isRequired,
  })).isRequired,
  onOpenTrailer: PropTypes.func.isRequired,
};

export default UpcomingMovieList;
