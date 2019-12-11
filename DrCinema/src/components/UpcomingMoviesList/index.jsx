import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ListItem from '../CinemaItem/index';

const UpcomingMovieList = ({
  upcoming,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={upcoming}
      renderItem={({
        item: {
          id, name, thumbnail, releaseDate,
        },
      }) => (
        <ListItem
          id={id}
          name={name}
          thumbnail={thumbnail}
          releaseDate={releaseDate}
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
  })).isRequired,
};

export default UpcomingMovieList;
