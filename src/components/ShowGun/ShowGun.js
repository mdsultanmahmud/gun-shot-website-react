import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const ShowGun = ({ gun, addToCart }) => {
    const [modalData, setModalData] = useState({})
    const { name, action, price, img, bullet } = gun
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full h-44 m-3' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Our all best gun showing here, you can buy it by price <strong className='font-bold'>${price}</strong>.</p>
                <div className="card-actions">
                    <div className="badge badge-outline"> {action} </div>
                    <div className="badge badge-outline"> {bullet}</div>
                </div>
                <div className='mt-2'>
                    <button onClick={() => addToCart(price)} className="btn btn-sm uppercase">Add To cart</button>
                    <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button btn-sm uppercase btn-warning ml-2">details</label>
                    {
                        modalData &&
                        (
                            <Modal data={modalData} setModalData={setModalData}></Modal>
                        )
                    }

                </div>
            </div>
        </div>

    );
};

export default ShowGun;