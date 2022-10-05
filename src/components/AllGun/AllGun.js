import React, { useEffect, useState } from 'react';
import ShowGun from '../ShowGun/ShowGun';
import './AllGun.css'
const AllGun = () => {
    const [guns, setGuns] = useState([])

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data))
    },[])
    return (
        <div className='p-4'>
            <h3>All Guns are: {guns.length}</h3>
            <div className='gun-container'>
            {
                guns.map(gun => <ShowGun 
                    key = {gun.id}
                    gun = {gun}
                ></ShowGun>)
            }
            </div>
        </div>
    );
};

export default AllGun;