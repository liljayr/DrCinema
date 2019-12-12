import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinema from '../views/Cinema';
import Cinemas from '../views/Cinemas';
import Movie from '../views/Movie';
import UpcomingMovies from '../views/UpcomingMovies';
import NavButton from '../components/NavButton';
import styles from './styles';

export default createAppContainer(createStackNavigator(
  {
    Cinemas,
    Cinema,
    Movie,
    UpcomingMovies,
  },
  {
    defaultNavigationOptions: (navigation) => ({
      title: navigation.navigate,
      headerStyle: styles.navBar,
      headerTitle: () => (
        <View style={styles.navContainer}>
          <NavButton
            onPress={() => { navigation.navigation.navigate('UpcomingMovies'); }}
            title="Væntanlegt í bío"
          />
          <NavButton
            onPress={() => { navigation.navigation.navigate('Cinemas'); }}
            title="Kvikmyndahús"
          />
        </View>
      ),
    }),
  },
));
