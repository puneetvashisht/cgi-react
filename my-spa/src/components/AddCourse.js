import React, { Component } from 'react'
import Toast from 'react-bootstrap/Toast';

export default class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: 'initial title',
            description: '',
            titleError: ''
          }
        // this.title = React.createRef();
        // this.description = React.createRef();

      }

      addCourse(){
         
            if(this.state.title.length < 3){
                return;
            }
            else{
                let requestObj = {title: this.state.title, summary: this.state.description}

                fetch('http://localhost:8080/courses/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(requestObj)  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
                  })
                  .then(res=>{
                      if(res.status === 201){
                          this.setState({show: true, title: '', description: ''});
                         
                      }
                  })
            }
          // Http- POST
         
            // .then(data=>console.log(data));
      }

      handleTitleChange(event){
          this.setState({title: event.target.value})
          if(event.target.value.length < 3){
            // setTitleError();
            this.setState({titleError:'Title length is less than 3 characters!!'})
          }
      }
      handleDescChange(event){
          this.setState({description: event.target.value})
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
                    <input type="text"  onChange={this.handleTitleChange.bind(this)} value={this.state.title} className="form-control" placeholder="Enter Title" aria-label="Username" aria-describedby="basic-addon1" />
                    <span style={{color: 'red'}}>{this.state.titleError}</span>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description</span>
                    <input type="text" onChange={this.handleDescChange.bind(this)} value={this.state.description} className="form-control" placeholder="Enter Description" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-primary" onClick={this.addCourse.bind(this)}>Add Course</button>
                </div>
            </div>
        )
    }
}
