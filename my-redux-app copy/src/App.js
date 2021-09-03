import React from "react";
import './App.css'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddCourse from "./components/AddCourse";
import MainHeader from "./components/MainHeader";
import Register from "./components/Register";
import UpdateCourse from "./components/UpdateCourse";
import ViewCourses from "./components/ViewCourses";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <MainHeader></MainHeader>
        </div>
        <div className="row">
          <div className="content">

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login" component={Login}>

              </Route>
              <Route path="/addcourse">
                <AddCourse />
              </Route>
              <Route path="/viewcourse">
                <ViewCourses />
              </Route>
              <Route path="/updatecourse/:id">
                <UpdateCourse />
              </Route>
              <Route path="/register" component={Register} >
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

