import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UpcomingList from '../../components/UpcomingMoviesList';
import { getUpcomingMovies } from '../../services/APIServices';
import InitializeUpcoming from '../../actions/upcomingActions';

class UpcomingMovies extends React.Component {
  async componentDidMount() {
    const { initializeUpcomingState, upcoming } = this.props;
    if (upcoming.length < 1) {
      initializeUpcomingState(await getUpcomingMovies());
    }
  }

  render() {
    const { upcoming } = this.props;
    return (
      <View>
        <UpcomingList
          upcoming={upcoming}
        />
      </View>
    );
  }
}

UpcomingMovies.propTypes = {
  initializeUpcomingState: PropTypes.func.isRequired,
  upcoming: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  upcoming: state.upcoming,
});

export default connect(mapStateToProps, {
  initializeUpcomingState: InitializeUpcoming,
})(UpcomingMovies);
