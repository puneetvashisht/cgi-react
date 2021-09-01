
import './Card.css'
import React, { Component } from 'react'
import Badge from './Badge'
import { Link } from 'react-router-dom';

const myStyle = {
    width: '18rem'
}


class Card extends Component {
   
    deleteCourse(){
        //
        fetch('http://localhost:8080/courses/' + this.props.course.id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
            // body: JSON.stringify(YOUR_ADDITIONAL_DATA)  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
        })
        .then(res=>res.json())
        .then(data=> console.log(data));

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

export default Card;

