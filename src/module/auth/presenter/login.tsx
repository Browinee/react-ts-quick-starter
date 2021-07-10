import { connect } from 'react-redux';
import Login from '../pages/login';
import { login } from '../store/actions/login';

const mapStateToProps = (state: any) => {
  return {
    loading: state.app.loading,
    isLogin: state.login.isLogin,
  };
};
const mapDispatchToProps = {
  login,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
