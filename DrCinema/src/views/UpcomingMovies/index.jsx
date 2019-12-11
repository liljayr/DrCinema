import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UpcomingList from '../../components/UpcomingMoviesList';
import { getUpcomingMovies } from '../../services/APIServices';
import InitializeUpcoming from '../../actions/upcomingActions';
import Trailer from '../../components/Trailer';

class UpcomingMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrailerModalOpen: false,
      selectedMovieUrl: '',
    };
  }

  async componentDidMount() {
    const { initializeUpcomingState, upcoming } = this.props;
    if (upcoming.length < 1) {
      initializeUpcomingState(await getUpcomingMovies());
    }
  }

  sortUpcoming() {
    const { upcoming } = this.props;
    return upcoming.sort((a, b) => {
      const x = new Date(a.releaseDate);
      const y = new Date(b.releaseDate);
      if (x > y) { return -1; }
      if (x < y) { return 1; }
      return 0;
    });
  }

  render() {
    const { upcoming } = this.props;
    const { isTrailerModalOpen, selectedMovieUrl } = this.state;
    return (
      <View>
        <UpcomingList
          upcoming={upcoming}
          sortUpcoming={this.sortUpcoming}
          onOpenTrailer={
            (url) => this.setState({ selectedMovieUrl: url, isTrailerModalOpen: true })
          }
        />
        <Trailer
          isOpen={isTrailerModalOpen}
          closeModal={() => this.setState({ isTrailerModalOpen: false })}
          url={selectedMovieUrl}
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
    trailer: PropTypes.string.isRequired,
    hasTrailer: PropTypes.bool.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  upcoming: state.upcoming,
});

export default connect(mapStateToProps, {
  initializeUpcomingState: InitializeUpcoming,
})(UpcomingMovies);
