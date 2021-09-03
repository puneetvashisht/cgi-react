import * as actions from '../actions/workout-actions';
let initialState = {
    message: '',
    workouts: [
        {"title": "Run for 5 mins", "desc": "test desc", cbpm: 343}
    ]
}

// Reducers in store to modify state -- don't directly manipulate state
const reducer = (state = initialState, action) =>{
    console.log('Action recieved at workout reducer***  ', action);
    switch(action.type){
        case actions.FETCH_WORKOUTS:
            return {
                workouts: action.payload
            }
        case actions.ADD_WORKOUT: 
            // mutable change to state
            // state.courses.push(action.payload);
            let newWorkout = [...state.workouts, action.payload]
            return {workouts: newWorkout}
        
        default : return state
    }
 
}

export default reducer;