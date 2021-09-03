import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import classes from './Navigation.module.css';

import * as actions from '../actions/auth-actions';


const Navigation = (props) => {

    return (
        <nav className={classes.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                {props.auth && <li><Link to="/about">About</Link></li>}
                {props.auth && <li><Link to="/addcourse">Add Course</Link></li>}
                {props.auth && <li><Link to="/addworkout">Add Workout</Link></li>}
                {props.auth && <li><Link to="/viewcourse">View Courses</Link></li>}
                {props.auth && <li><Link to="/viewworkout">View Workouts</Link></li>}
                {!props.auth && <li><Link to="/login">Login</Link></li>}
                {!props.auth && <li><Link to="/register">Register</Link></li>}
                {props.auth && <li><a href="#" onClick={()=>props.authenticate()}>Logout</a></li>}
            </ul>
        </nav>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
      auth: state.authReducer.auth
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => dispatch(actions.logout())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);