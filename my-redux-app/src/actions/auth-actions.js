export const USER_LOGIN = 'USER_LOGIN';


export const login = () => {
    console.log('Login action invoked');
    // simulation of authentication
    return {type: USER_LOGIN, payload: true}
}


export const logout = () => {
    console.log('Logout action invoked');

    // simulation of authentication
    return {type: USER_LOGIN, payload: false}
}