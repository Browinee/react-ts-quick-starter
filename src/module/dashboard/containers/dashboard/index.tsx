import { connect } from 'react-redux';
import Dashboard from '../../pages/dashboard';

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
