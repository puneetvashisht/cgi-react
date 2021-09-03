export const USER_LOGIN = 'USER_LOGIN';


export const login = () => {
    console.log('Login action invoked');
    // simulation of authentication

    return dispatch => {
  // Async code 
        // setTimeout(()=>{
        //     dispatch({type: USER_LOGIN, payload: true})
        // }, 5000)
        fetch('http://localhost:8080/auth')
        .then(res=>res.json())
        .then(data=> {
            dispatch({type: USER_LOGIN, payload: data.success})
        })

    }
  

    
}


export const logout = () => {
    console.log('Logout action invoked');

    // simulation of authentication
    return {type: USER_LOGIN, payload: false}
}