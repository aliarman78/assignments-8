import React from 'react';
import './SelectItem.css';
const SelectItem = (props) => {
    const {name,img} = props.product;
    return ( 
        <div className = 'SelectItem my-4' >
        <img src = {img} alt = ""/>
        <p><small> {name} </small></p>
        </div>
    );
};

export default SelectItem;