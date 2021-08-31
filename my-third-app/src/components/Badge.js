import React, { Component } from 'react'

// Class Way
class Badge extends Component{

    // state belongs to the component vs props are passed onto the component by parent
    // state is mutable vs props are immutable
    
    constructor(){
        super();
        this.state = {count: 0}
    }

    incrementCount(){
        console.log('button is clicked...')
        let newCount = this.state.count + 1;
        this.setState({count: newCount})
    }
    render(){
        return (
        <button type="button" className="btn btn-primary" onClick={this.incrementCount.bind(this)}>
            {this.props.caption} <span className="badge bg-secondary">{this.state.count}</span>
        </button>
        )
    }
}

// Functional Way

// function Badge(props){
//     return(
//         <button type="button" className="btn btn-primary">
//             {props.caption} <span className="badge bg-secondary">{props.count}</span>
//         </button>
//     )
// }

export default Badge;