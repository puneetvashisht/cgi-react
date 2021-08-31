import React, { Component } from 'react'
import DropdownItem from './DropdownItem';

export default class Dropdown extends Component {

    constructor(){
        super();
        this.state = {
            show: false, 
            courses: [
            "Angular", "React", "Ember"
            ],
            caption : 'Show Courses'
        }
    }
    // toggle the state property show
    toggleShow(){
        this.setState({show: !this.state.show})
    }
    handleItemClicked(item){
        console.log('in parent :', item)
        this.setState({caption: item, show: false})
    }

    render() {

        let courseList = this.state.courses.map((course, i)=>
        {
            return <DropdownItem key={i} text={course} whenItemClicked={this.handleItemClicked.bind(this)}></DropdownItem>
        })
        return (
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" onClick={this.toggleShow.bind(this)} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {this.state.caption}
            </button>
            <ul className={this.state.show?"dropdown-menu show": "dropdown-menu"} aria-labelledby="dropdownMenuButton1">
                {courseList}
            </ul>
            </div>
        )
    }
}
