
import './Card.css'
import React, { Component } from 'react'
import Badge from './Badge'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/action';

const myStyle = {
    width: '18rem'
}


class Card extends Component {
   
    deleteCourse(){
        //
        this.props.onDeleteCourse(this.props.course.id)

    }

    render() {
        return (
            <div className="card cardwidth">
                
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><Link to={'/updatecourse/' + this.props.course.id}>{this.props.course.title}</Link></h5>
                    <p className="card-text">{this.props.course.summary}</p>
                    <Badge caption="Votes" count={this.props.course.votes}></Badge>
                    <button className="btn btn-danger" onClick={this.deleteCourse.bind(this)}> X </button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      onDeleteCourse: (id) => dispatch(actions.deleteCourse(id))
    }
  }

export default connect(null, mapDispatchToProps)(Card);

