import React from 'react';
import { View, Text } from 'react-native';
import { getMovies, getUpcomingMovies, getCinemas } from '../../services/APIServices';

class Cinemas extends React.Component {
  async componentDidMount() {
    const response = await getCinemas();
    console.log(response);
  }

  render() {
    return (
      <View>
        <Text>
          Cinemas
        </Text>
      </View>
    );
  }
}

export default Cinemas;
