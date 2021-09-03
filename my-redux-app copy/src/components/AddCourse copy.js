import React, { Component } from 'react'
import Toast from 'react-bootstrap/Toast';

export default class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
          }
        this.title = React.createRef();
        this.description = React.createRef();

      }

      addCourse(){
          console.log(this.title.current.value);
          console.log(this.description.current.value);
          // Http- POST
          let requestObj = {title: this.title.current.value, summary: this.description.current.value}

          fetch('http://localhost:8080/courses/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObj)  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
            })
            .then(res=>{
                if(res.status === 201){
                    this.setState({show: true});
                }
            })
            // .then(data=>console.log(data));
      }

    render() {
        return (
            <div>

<Toast onClose={()=> this.setState({show: false})} show={this.state.show}>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    <strong className="me-auto">Notification</strong>
    <small>1 sec ago</small>
  </Toast.Header>
  <Toast.Body>Course is successfully added!!</Toast.Body>
</Toast>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Title</span>
                    <input type="text"  ref={this.title} className="form-control" placeholder="Enter Title" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description</span>
                    <input type="text" ref={this.description} className="form-control" placeholder="Enter Description" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-primary" onClick={this.addCourse.bind(this)}>Add Course</button>
                </div>
            </div>
        )
    }
}
