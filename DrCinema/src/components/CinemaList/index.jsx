import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

const CinemaList =({
  contacts,
}) => (
  <View>
    <FlatList>
      numColumns={1}
      data={contacts}
      renderItem={({
        item: {
          id, name, phone, photo,
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
)
