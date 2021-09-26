import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import "./Teacher.css"

const Teacher = () => {
    const [teachers, setTeachers] = useState([])
    const [totalCost, setTotalCost] = useState([])

    useEffect(() => {
        fetch('./Teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    // how much teachers add to cart
    const handleSeminerCart = teacher => {
        const newAdd = [...totalCost, teacher];
        setTotalCost(newAdd)
    }

    // total salary
    let total = 0;
    for (let teacher of totalCost) {
        total = total + teacher.salary;
    }

    // add to teachers name
    let name = [];
    for (const names of totalCost) {
        name = name + names.name;
    }
    return (
        <div className='teacher-container'>
            <div className='teachers'>
                {
                    teachers.map(teacher => <Display
                        key={teacher._id}
                        teacher={teacher}
                        handleSeminerCart={handleSeminerCart}
                    >
                    </Display>)
                }
            </div>
            <div className='total-teacher'>
                <h3><i class="fas fa-user"></i> Teacher Added: {totalCost.length}</h3>
                <h3>Total Cost: {total}</h3>
                <p className='name'>{name}</p>
                <button className='add-fav'>Add Now</button>
            </div>
        </div>
    );
};

export default Teacher;