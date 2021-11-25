import React from 'react';
import "./Display.css"

const Display = (props) => {
    const { picture, name, institute, gender, age, salary } = props.teacher
    return (
        <div className='teacher-details col-lg-4 col-sm-6 col-12'>
            <img className='teacher-img' src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>Institute: {institute}</p>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
            <p>Salary: {salary}</p>
            <button onClick={() => props.handleSeminerCart(props.teacher)} className='add-fav'><i class="fab fa-leanpub"></i>Add to Seminer</button>
            <div className='social-icon'>
                <a href="/facebook"><i class="fab fa-facebook-square"></i></a>
                <a href="/twiter"><i class="fab fa-twitter-square"></i></a>
            </div>
        </div>
    );
};

export default Display;