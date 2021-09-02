import React, { Component } from 'react'
import Card from './Card';
import axios from 'axios';

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
    
        // fetch('http://localhost:8080/courses')
        // .then(res=>res.json())
        // .then(body=>{
        //   console.log(body);
        //   this.setState({courses: body})
        // });

        axios.get('http://localhost:8080/courses')
        .then((response) => {
            // handle success
            console.log(response);
            this.setState({courses: response.data})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

        
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
