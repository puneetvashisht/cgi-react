import * as actions from '../actions/auth-actions';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';

const Login = (props) => {

    const history = useHistory();
    return (
        <>
            <h2>Login</h2>
            <button onClick={()=> { props.authenticate()}}>Login</button>
        </>
    );
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          authenticate: () => dispatch(actions.login())
      }
  }

export default connect(null, mapDispatchToProps)(Login);