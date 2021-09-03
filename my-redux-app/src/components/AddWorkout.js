import React, { Component } from 'react'
import Toast from 'react-bootstrap/Toast';
import {connect} from 'react-redux';
import * as actions from '../actions/workout-actions';

class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: '',
            description: '',
            titleError: '',
            cbpm: 0
          }
        // this.title = React.createRef();
        // this.description = React.createRef();

      }

      addWorkout(){
         // add to single store
         this.props.onAddWorkout({title: this.state.title, description: this.state.description, cbpm: this.state.cbpm});

      }

      handleTitleChange(event){
          this.setState({title: event.target.value})
          // if(event.target.value.length < 3){
          //   // setTitleError();
          //   this.setState({titleError:'Title length is less than 3 characters!!'})
          // }
      }
      handleDescChange(event){
          this.setState({description: event.target.value})
      }
      handleCbpmChange(event){
          this.setState({cbpm: event.target.value})
      }

    render() {
        return (
            <div>

<Toast onClose={()=> this.setState({show: false})} show={this.state.show}>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    <strong className="me-auto">Notification</strong>
    <small>1 sec ago</small>
  </Toast.Header>
  <Toast.Body>Course is successfully added!!</Toast.Body>
</Toast>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Title</span>
                    <input type="text"  onChange={this.handleTitleChange.bind(this)} value={this.state.title} className="form-control" placeholder="Enter Title" aria-label="Username" aria-describedby="basic-addon1" />
                    <span style={{color: 'red'}}>{this.state.titleError}</span>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description</span>
                    <input type="text" onChange={this.handleDescChange.bind(this)} value={this.state.description} className="form-control" placeholder="Enter Description" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Calories Burnt Per Minute</span>
                    <input type="number" onChange={this.handleCbpmChange.bind(this)} value={this.state.cbpm} className="form-control" placeholder="Enter Description" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-primary" onClick={this.addWorkout.bind(this)}>Add Wokrout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    courses: state.courseReducer.courses
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // onAddCourse: (course) => dispatch(  {type: 'ADD_COURSE', payload: course})
    onAddWorkout: (workout) => dispatch(actions.addWorkout(workout))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
