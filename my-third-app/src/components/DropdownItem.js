import React, { Component } from 'react'

// stateless component
const DropdownItem = (props) => {

    const handleItemClick = () => {
        console.log('Item clicked: ', props.text)
        props.whenItemClicked(props.text);
    }

    return (
        <li><a className="dropdown-item" onClick={handleItemClick} href="#">{props.text}</a></li>
    )
}

export default DropdownItem;
