
import {connect} from 'react-redux';
import {
    Route, Redirect
  
  } from "react-router-dom";

function PrivateRoute(prop, { component:Component, ...rest }) {
    // console.log('In function:' , auth)
    // console.log('In function:' , Component)
    // console.log('In function:' , rest)
    console.log(prop)
    return (
        
      <Route
        {...rest}
        render={props =>
          prop.auth ? (
            <Component {...props}/>
          ) : (
            <Redirect
              to="/login"/>
          )
        }
      />
    );
  }

  const mapStateToProps = (state) => {
    console.log(state);
    return {
      auth: state.auth
    }
  }



export default connect(mapStateToProps, null)(PrivateRoute);