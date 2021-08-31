
import './Card.css'
import React, { Component } from 'react'
import Badge from './Badge'

const myStyle = {
    width: '18rem'
}


export default class Card extends Component {

    render() {

        return (
            <div className="card cardwidth">
                
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.course.title}</h5>
                    <p className="card-text">{this.props.course.summary}</p>
                    <Badge caption="Votes" count={this.props.course.votes}></Badge>
           
                </div>
            </div>
        )
    }
}
