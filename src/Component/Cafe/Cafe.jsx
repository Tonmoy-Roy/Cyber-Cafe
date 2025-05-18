import React, { useEffect, useState } from 'react';
import './Cafe.css';
import Cart from '../Cart/Cart';
import Result from '../Result/Result';

const Cafe = () => {
    const [Cafes, setCafes] = useState([]);
    const [carttitle, setCarttitle] = useState([]);
    useEffect(() => {
        fetch('cafes.json')
            .then(response => response.json())
            .then(data => setCafes(data))
    }, []);
    // bookmark , button_cafe(Cart,jsx) theke data collect krse
    const handleAddToCart = (bookmark) => { 
        const newcart = [...carttitle, bookmark.title];
        setCarttitle(newcart);
    }
    return (
        <div className='cafe'>
            <div className='map'>
                {
                    Cafes.map(cafe => <Cart key={cafe.key} cafe={cafe} handleAddToCart={handleAddToCart}
                    ></Cart>)
                }
            </div>
            <div className='result'>
                <h3 className='text'>Spent time on Watch : { }</h3>
                <div className='text1'>
                    <h3 className='tex'>Bookmarked Blogs : {carttitle.length}</h3>
                    {carttitle.map(title => <p class="Book_title">{title}</p>)}
                </div>
            </div>
        </div>
    );
};
export default Cafe;