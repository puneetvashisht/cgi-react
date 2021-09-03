const redux = require('redux');
// 0. Reducers that change the state in immutable way.

const initialState = {courses: [
    {
      "id": 1,
      "title": "React",
      "summary": "Library from facebook!",
      "votes": 34345
    },
    {
      "id": 3,
      "title": "Ember",
      "summary": "Framework open-source!",
      "votes": 12445
    }  
  ]}

  // only immutable changes to the state.. no direct state manipulation
const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_COURSE': 
            // mutable change to state
            // state.courses.push(action.payload);
            let newCourses = [...state.courses, action.payload]
            return {courses: newCourses}

        case 'FETCH_COURSES': return state.courses;
        case 'DELETE_COURSE': 
            let filteredCourse = state.courses.filter(course=> course.id != action.payload.id)
            return {courses: filteredCourse}
    }
}

//1. Store - One single store to contains all application state
const store = redux.createStore(reducer);


store.subscribe(()=> console.log(store.getState()));

// 2. Create and dispatch actions

const action = {type: 'ADD_COURSE', payload: {"title": "Angular", "summary": "framework from google!!","id": 4,"votes": 22334}}
// const action = {type: 'DELETE_COURSE', payload: {id: 1}};
store.dispatch(action)
const action1 = {type: 'DELETE_COURSE', payload: {id: 3}};
store.dispatch(action1)


