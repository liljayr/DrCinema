import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import ListItem from '../MovieItem/index';

const ShowTimes = ({
  shows,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={shows}
      renderItem={({
        item: {
          time, ticketURL,
        },
      }) => (
        <ListItem
          time={time}
          ticketURL={ticketURL}
        />
      )}
    />
  </View>
);

ShowTimes.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string.isRequired,
    ticketURL: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(ShowTimes);
