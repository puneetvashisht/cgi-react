import React, { Component } from 'react'
import Card from './Card';
// import axios from 'axios';
import {connect} from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import * as actions from '../actions/workout-actions';

class ViewWorkotus extends Component {

    constructor() {
        console.log('**** Constructor Invoked')
        super();
        
      }

      componentDidMount() {
        console.log('**** Component Did Mount');
        this.props.onFetchWorkouts();
      }


    render() {

        let workoutList = this.props.workouts && this.props.workouts.map((workout, i) => {
            return (
              <ListGroup.Item>{workout.title}</ListGroup.Item>
            )
          })
        return (
            <div className="container">
                <div className="row">
                <ListGroup>
                  {workoutList}
                </ListGroup>
                </div>      
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    workouts: state.workoutReducer.workouts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddCourse: (course) => dispatch(  {type: 'ADD_COURSE', payload: course})
    onFetchWorkouts: () => dispatch(actions.fetchWorkouts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewWorkotus);