import * as actions from '../actions/auth-actions';

const initialState = {
  auth: false
}

  // only immutable changes to the state.. no direct state manipulation
  const reducer = (state = initialState, action) => {
    // console.log(action);
    switch(action.type){
        case actions.USER_LOGIN: 
            return {auth: action.payload}
        default : return state
           
    }
    // return state;
}

export default reducer;