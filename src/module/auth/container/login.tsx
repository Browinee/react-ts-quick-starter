import { connect } from 'react-redux';
import Login from '../pages/login';

const mapStateToProps = (state: any) => {
  return state;
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
