import React from 'react';
import './Cart.css';
const Cart = ({ cafe = {}, handleAddToCart}) => {
    const img = cafe.image;
    const name = cafe.id;
    const time = cafe.post_time;
    const title = cafe.title;
    const watch_time = cafe.time;
    return (
        <div className='card'>
            <div className='user-pp'>
                <img className='size' src={img} alt="" />
                <div className='imph'>
                    <img className='icon' src="../../../img/icons8-male-user-100.png" alt="" />
                    <div className='name_time'>
                        <p className='name'>{name}</p>
                        <p className='post_time'>{time}</p>
                    </div>
                    <div className='read_time'>
                        <p>Watch Time : {watch_time} </p>
                        <div className='icoc_1_place'>
                            <button className='btn-hov'><img className='icon_1' src="../../../img/icons8-bookmark-50.png" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='title'>
                    <h3>{title}</h3>
                </div>
                <button onClick={() => handleAddToCart(cafe)}>Mark As Read</button>
                {/* cafe er vitor sob data ache */}
            </div>
        </div>
    );
};
export default Cart;