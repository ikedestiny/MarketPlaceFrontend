import React from 'react';
import PrimaryButton from './buttons/PrimaryButton';

const Item = ({ business, name, quantity, unitPrice, imageLink }) => {
    return (
        <div className='flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs mx-auto'>
            <img className='rounded-2xl w-full h-40 object-cover mb-4' src={imageLink} alt={`${name} image`} />
            <h1 className='text-2xl font-bold mb-2'>{unitPrice}</h1>
            <h2 className='text-xl mb-1'>{name}</h2>
            <h3 className='text-gray-600 mb-2'>{business}</h3>
            <p className='text-gray-500 mb-4'>Available: {quantity}</p>
            <PrimaryButton title="Add to Cart" />
        </div>
    );
};

export default Item;
