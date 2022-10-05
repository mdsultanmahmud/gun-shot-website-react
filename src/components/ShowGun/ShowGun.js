import React from 'react';

const ShowGun = ({gun}) => {
    const gunStyle = {
        padding:'20px',
        border:'1px solid tomato',
        borderRadius:'15px',
        margin:'20px'
    }
    console.log(gun)
    return (
        <div style={gunStyle}>
            <h2><strong>Name:</strong> {gun.name}</h2>
            <img style={{widht:'220px', height:'200px', borderRadius:'10px', margin:'10px auto'}} src={gun.img} alt="" />
            <p><strong>Action:</strong> {gun.action}</p>
            <p><strong>Bullet:</strong> {gun.bullet}</p>
            <p><strong>Category:</strong> {gun.category}</p>
            <p><strong>Price:</strong> ${gun.price}</p>

        </div>
    );
};

export default ShowGun;