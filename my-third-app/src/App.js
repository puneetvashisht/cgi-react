
import Card from './components/Card';
import AddCourse from './components/AddCourse';
import Register from './components/Register';
import Button from 'react-bootstrap/Button';


import React, { Component } from 'react'
// import Dropdown from './components/Dropdown';

export default class App extends Component {

  // object creation.. state initializations
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

    // Async invocation..
    // Http communication
    // setTimeout(()=>{
    //   this.setState({courses: []});
    // }, 5000);

    // Get operations using a file name
    // fetch('http://localhost:3000/dummy-courses.json')

    fetch('http://localhost:8080/courses')
    .then(res=>res.json())
    .then(body=>{
      console.log(body);
      this.setState({courses: body})
    });
    
  }


  render() {
    console.log('**** Render Method')
   
    let courseList = this.state.courses && this.state.courses.map((course, i) => {
      return (
            <Card key={i} course={course}></Card>
      )
    })

    return (
      <div className="container">
         <div className="row">
            <Register/>
          </div>
          <div className="row">
            <AddCourse></AddCourse>

          <Button size="sm" onClick={()=> this.setState({show: !this.state.show})} variant="dark">Show Toast</Button>
          </div>
          <hr/>
          <div className="row">
        {courseList}
        {/* <Dropdown></Dropdown> */}
        </div>
      </div>
    )

  }
}




// function App() {
//   return (
//     <>
//       {/* <Badge caption="Vote For A"></Badge>
//       <Badge caption="Vote For B" count="25"></Badge> */}
//       <Card/>
//     </>

//   );
// }

// export default App;
