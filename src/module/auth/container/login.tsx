import { connect } from 'react-redux';
import { toggleLoading } from 'src/store/actions/app';
import Login from '../pages/login';

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.app.loading,
  };
};
const mapDispatchToProps = {
  toggleLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
