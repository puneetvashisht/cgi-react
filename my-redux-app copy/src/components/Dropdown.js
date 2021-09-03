import React, { useState } from 'react'
import DropdownItem from './DropdownItem';

// stateful component
const Dropdown = () => {

    const [courses, setCourses] = useState(["Angular", "React", "Ember"]);
    const [show, setShow] = useState(false);
    const [caption, setCaption] = useState('Select Course')

    const toggleShow = ()=>{
        setShow(!show)
    }

    const handleItemClicked = (item) => {
      
        console.log('in parent :', item)
        setCaption(item);
        setShow(false);

    }

    let courseList = courses.map((course, i)=>
    {
        return <DropdownItem key={i} text={course} whenItemClicked={handleItemClicked}></DropdownItem>
    })
    return (
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" onClick={toggleShow} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {caption}
        </button>
        <ul className={show?"dropdown-menu show": "dropdown-menu"} aria-labelledby="dropdownMenuButton1">
            {courseList}
        </ul>
        </div>
    )
}

export default Dropdown;
