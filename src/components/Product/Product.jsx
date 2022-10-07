import React from 'react';

const Product = ({product, addToCart}) => {
    const {name, img, seller, price, ratings} = product;
    return (
        <div className='border-orange-200 border-2 bg-gray-100 rounded-md p-3 relative h-[470px] md:h-[480px] lg:h-[470px]'>
                <img src={img} alt="" />
                <div className='pt-2'>
                    <h3 className='text-orange-500 font-semibold'>{name}</h3>
                    <h4 className='font-semibold text-lg'>Price: {price}</h4>
                    <p className='font-semibold'>seller: {seller}</p>
                    <span className='font-bold text-orange-600'>Ratings: {ratings}</span>
                </div>
            <div>
                <button onClick={() => addToCart(product)} className='w-full bg-orange-300 absolute bottom-0 left-0 rounded-b-md text-xl p-2 hover:bg-orange-400 text-white'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;