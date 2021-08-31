
import Card from './components/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

import React, { Component } from 'react'
// import Dropdown from './components/Dropdown';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      courses: [
        { title: "React", summary: "Library from facebook!", votes: 34345 },
        { title: "Angular", summary: "Framework from google!", votes: 34445 },
        { title: "Ember", summary: "Framework open-source!", votes: 12445 }
      ],
      show: true

    }
  }
  render() {

    let courseList = this.state.courses.map((course, i) => {
      return (
            <Card key={i} course={course}></Card>
      )
    })

    return (
      <div className="container">
          <div className="row">
          <Toast onClose={()=> this.setState({show: false})} show={this.state.show}>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    <strong className="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
          <Button size="sm" onClick={()=> this.setState({show: !this.state.show})} variant="dark">Show Toast</Button>
          </div>
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
