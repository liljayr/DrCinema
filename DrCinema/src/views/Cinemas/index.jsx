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


  render() {
    const {
      cinemas,
    } = this.props;
    return (
      <View>
        <CinemaList
          cinemas={cinemas}
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
