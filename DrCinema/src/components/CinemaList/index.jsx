import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ListItem from '../CinemaItem/index'
import { connect } from 'react-redux';

const CinemaList =({
  cinemas,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={cinemas}
      renderItem={({
        item: {
          id, name, website,
        },
      }) => (
        <ListItem
          id={id}
          name={name}
          website={website}
        />
      )}
    />
  </View>
);

ContactList.propTypes = {
  cinemas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  })).isRequired,
}

export default connect(mapStateToProps)(CinemaList);
