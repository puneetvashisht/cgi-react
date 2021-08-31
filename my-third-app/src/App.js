
import Card from './components/Card';

import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      courses: [
        { title: "React", summary: "Library from facebook!", votes: 34345 },
        { title: "Angular", summary: "Framework from google!", votes: 34445 },
        { title: "Ember", summary: "Framework open-source!", votes: 12445 }
      ]
    }
  }
  render() {

    let courseList = this.state.courses.map((course, i) => {
      return (
        <Card key={i} course={course}></Card>
      )
    })

    return (
      <>
      {courseList}
      </>
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
