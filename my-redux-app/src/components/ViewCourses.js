import React, { Component } from 'react'
import Card from './Card';
// import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../actions/action';

class ViewCourses extends Component {

    constructor() {
        console.log('**** Constructor Invoked')
        super();
        
      }

      componentDidMount() {
        console.log('**** Component Did Mount');
        this.props.onFetchCourses();
      }


    render() {

        let courseList = this.props.courses && this.props.courses.map((course, i) => {
            return (
                  <Card key={i} course={course}></Card>
            )
          })
        return (
            <div className="container">
                <div className="row">
                {courseList}
                </div>      
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    courses: state.courses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddCourse: (course) => dispatch(  {type: 'ADD_COURSE', payload: course})
    onFetchCourses: () => dispatch(actions.fetchCourses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCourses);