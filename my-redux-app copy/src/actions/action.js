// API calling..


export const ADD_COURSE = 'ADD_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const FETCH_COURSES = 'FETCH_COURSES';
export const USER_LOGIN = 'USER_LOGIN';

const baseUrl = "http://localhost:8080/courses/"

export const deleteCourse = (id) => {

    return dispatch => {
        fetch(baseUrl + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({ type: DELETE_COURSE, payload: id });
            });
    }

}

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

const saveCourse = (course) => {
    return { type: ADD_COURSE, payload: course }
}

export const addCourse = (course) => {
    return dispatch => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
        })
            .then(res => {
                if (res.status === 201) {
                    //   this.setState({show: true, title: '', description: ''});
                    dispatch(saveCourse(course))
                }
            })
    }
}



export const fetchCourses = () => {

    return dispatch => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch({ type: FETCH_COURSES, payload: data });
            })

    }
    // return {type: FETCH_COURSES};
}