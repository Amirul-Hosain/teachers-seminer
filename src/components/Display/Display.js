import React from 'react';
import "./Display.css"

const Display = (props) => {
    const { picture, name, institute, gender, age, salary } = props.teacher
    return (
        <div className='teacher-details'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <p>Institute: {institute}</p>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
            <p>Salary: {salary}</p>
            <button onClick={() => props.handleSeminerCart(props.teacher)} className='add-fav'><i class="fab fa-leanpub"></i>Add to Favarite</button>
        </div>
    );
};

export default Display;