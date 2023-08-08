import React, { useEffect, useState } from 'react';
import './Cafe.css';
import Cart from '../Cart/Cart';
const Cafe = () => {
    const [Cafes, setCafes] = useState([]);
    // const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('cafes.json')
            .then(response => response.json())
            .then(data => setCafes(data))
    }, []);
    return (
        <div className='cafe'>
            <div className='map'>
                {
                    Cafes.map(cafe => <Cart
                        key={cafe.key}
                        cafe={cafe}
                    // handleAddToCart={handleAddToCart}
                    ></Cart>)
                }
            </div>
            <div className='result'>
                <h3 className='text'>Spent time on read : </h3>
                <h3 className='text1'>Bookmarked Blogs : </h3>
            </div>
        </div>
    );
};
export default Cafe;