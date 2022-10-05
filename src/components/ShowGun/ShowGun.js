import React from 'react';

const ShowGun = ({ gun, addToCart }) => {
    const { name, action, price, img, bullet, category, capacity } = gun
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full h-44 m-3' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div>
                    <p><strong>Category: </strong>{category}</p>
                    <p><strong>Capacity: </strong>{capacity}</p>
                    <p><strong>Price: </strong>${price}</p>
                </div>
                <div className="card-actions">
                    <div className="badge badge-outline"> {action} </div>
                    <div className="badge badge-outline"> {bullet}</div>
                </div>
                <div className='mt-2'>
                <button onClick={() => addToCart(price)} className="btn btn-sm uppercase">Add To cart</button>
                <button className="btn btn-sm uppercase btn-warning ml-2">details</button>
                </div>
            </div>
        </div>

    );
};

export default ShowGun;