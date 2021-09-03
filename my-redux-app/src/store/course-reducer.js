import * as actions from '../actions/action';

const initialState = {courses: [
    // {
    //   "id": 1,
    //   "title": "React",
    //   "summary": "Library from facebook!",
    //   "votes": 34345
    // },
    // {
    //   "id": 3,
    //   "title": "Ember",
    //   "summary": "Framework open-source!",
    //   "votes": 12445
    // }  
  ],
  auth: false
}

  // only immutable changes to the state.. no direct state manipulation
  const reducer = (state = initialState, action) => {
    // console.log(action);
    switch(action.type){
        case actions.ADD_COURSE: 
            // mutable change to state
            // state.courses.push(action.payload);
            let newCourses = [...state.courses, action.payload]
            return {courses: newCourses}

        case actions.FETCH_COURSES: return {courses: action.payload};
        case actions.DELETE_COURSE: 
            let filteredCourse = state.courses.filter(course=> course.id != action.payload.id)
            return {courses: filteredCourse}
        case actions.USER_LOGIN: 
            return {auth: action.payload}
        default : return state
           
    }
    // return state;
}

export default reducer;