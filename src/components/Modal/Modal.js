import React from 'react';

const Modal = (props) => {
    const { name, action, price, img, bullet, category, capacity } = props.data
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => props.setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <p><strong>Capacity:</strong> {capacity}</p>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Action:</strong> {action}</p>
                    <p><strong>Bullet:</strong> {bullet}</p>

                </div>
            </div>
        </div>
    );
};

export default Modal;