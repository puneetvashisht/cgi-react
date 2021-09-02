import {
    useParams
  } from "react-router-dom";

const UpdateCourse  = () => {

    let { id } = useParams();

    return (
        <>
        <h2>Update Course</h2>
        <h3>ID: {id}</h3>
        </>
    )
}

export default UpdateCourse;