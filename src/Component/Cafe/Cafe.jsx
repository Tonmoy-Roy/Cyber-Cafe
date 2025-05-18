import React, { useEffect, useState } from 'react';
import './Cafe.css';
import Cart from '../Cart/Cart';

const Cafe = () => {
    const [Cafes, setCafes] = useState([]);
    const [carttitle, setCarttitle] = useState([]);
    const [watchtime, setWatchtime] = useState(0);
    useEffect(() => {
        fetch('cafes.json')
            .then(response => response.json())
            .then(data => setCafes(data))
    }, []);
    // bookmark , button_cafe(Cart,jsx) theke data collect krse
    const handleAddToCart = (bookmark) => {
        const newcart = [...carttitle, bookmark.title];
        setCarttitle(newcart);
        setWatchtime(watchtime => watchtime + parseInt(bookmark.time));
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
                <h3 className='text'>Spent time on Watch : {watchtime}</h3>
                <div className='text1'>
                    <h3 className='tex'>Bookmarked Blogs : {carttitle.length}</h3>
                    {carttitle.map(title => <p class="Book_title">{title}</p>)}
                </div>
            </div>
        </div>
    );
};
export default Cafe;

{/*
    // If watchtime was 0 initially
       const watchtime = watchtime + 5; // Uses initial 0
       setWatchtime(watchtime); // Sets to 5

    // If called again quickly:
       const watchtime = watchtime + 3; // Still uses initial 0!
*/}