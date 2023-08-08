import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props);
    const img = props.cafe.image;
    const name = props.cafe.id;
    const time = props.cafe.post_time;
    const title = props.cafe.title;
    const read_time = props.cafe.time;
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
                        <p>{read_time} <img className='icon_1' src="../../../img/icons8-bookmark-24.png" alt="" /></p>
                    </div>
                </div>
                <div className='title'>
                    <h3>{title}</h3>
                </div>
                <a href="">Mark as read</a>
            </div>
        </div>
    );
};
export default Cart;