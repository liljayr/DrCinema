import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CinemaList from '../../components/CinemaList';
import { getCinemas } from '../../services/APIServices';
import InitializeCinemas from '../../actions/cinemaActions';

class Cinemas extends React.Component {
  async componentDidMount() {
    const { initializeCinemasState, cinemas } = this.props;
    if (cinemas.length < 1) {
      initializeCinemasState(await getCinemas());
    }
  }

  sortCinemas() {
    const { cinemas } = this.props;
    return cinemas.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    });
  }

  render() {
    return (
      <View>
        <CinemaList
          cinemas={this.sortCinemas()}
        />
      </View>
    );
  }
}

Cinemas.propTypes = {
  initializeCinemasState: PropTypes.func.isRequired,
  cinemas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  cinemas: state.cinemas,
});

export default connect(mapStateToProps, {
  initializeCinemasState: InitializeCinemas,
})(Cinemas);
