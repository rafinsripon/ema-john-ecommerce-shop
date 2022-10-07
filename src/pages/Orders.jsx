import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const {inititalCart} = useLoaderData()
    // console.log(inititalCart);
    const [cart, setCart] = useState(inititalCart);
    // console.log(cart)
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    //clear cart
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='grid lg:grid-cols-4 gap-3 px-16 mt-14'>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 col-span-3 gap-4 rounded-lg mr-20">
                {
                    cart.map(product => <ReviewItem 
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}/>)
                }
                {
                    cart.length === 0 && <h2 className='text-4xl font-extrabold text-center text-pink-700 mt-24'> No Item For Review, Please. &#x1F449;<Link className='underline text-pink-400' to='/shop'>Shop More</Link> </h2>
                }
            </div>
            <div className="cartContainer col-span-1 md:flex-col-reverse bg-orange-200 p-4">
                <Cart cart={cart} clearCart={clearCart}>
                <Link to='/shop'>
                        <button className='bg-orange-500 text-white text-lg font-semibold w-full py-2 mt-4 rounded-md cursor-pointer'>Back Shop</button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;