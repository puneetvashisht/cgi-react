import React, { Component } from 'react'
import Card from './Card';

export default class ViewCourses extends Component {

    constructor() {
        console.log('**** Constructor Invoked')
        super();
        this.state = {
          courses: [],
          show: true
    
        }
      }

      componentDidMount() {
        console.log('**** Component Did Mount')
    
        fetch('http://localhost:8080/courses')
        .then(res=>res.json())
        .then(body=>{
          console.log(body);
          this.setState({courses: body})
        });
        
      }

    render() {

        let courseList = this.state.courses && this.state.courses.map((course, i) => {
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
