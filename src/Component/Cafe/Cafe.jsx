import React, { useEffect, useState } from 'react';
import './Cafe.css';
import Cart from '../Cart/Cart';
import Result from '../Result/Result';

const Cafe = () => {
    const [Cafes, setCafes] = useState([]);
    const [result, setResult] = useState([]);
    useEffect(() => {
        fetch('cafes.json')
            .then(response => response.json())
            .then(data => setCafes(data))
    }, []);
    const handleAddToCart = (cart) => {
        const newResult = [...result, cart];
        setResult(newResult);
    }
    return (
        <div className='cafe'>
            <div className='map'>
                {
                    Cafes.map(cafe => <Cart
                        key={cafe.key}
                        cafe={cafe}
                        handleAddToCart={handleAddToCart}
                    ></Cart>)
                }
            </div>
            <div className='result'>
                <h3 className='text'>Spent time on Watch : </h3>
                <h3 className='text1'>Bookmarked Blogs : </h3>
            </div>
            <div className="result-container">
                <Result result={result}></Result>
            </div>
        </div>
    );
};
export default Cafe;