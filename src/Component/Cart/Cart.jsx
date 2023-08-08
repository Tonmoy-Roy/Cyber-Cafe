import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props);
    const img = props.cafe.image;
    const name = props.cafe.id;
    const time = props.cafe.time;
    return (
        <div className='card'>
            <div className='user-pp'>
                <img className='size' src={img} alt="" />
                <div className='imph'>
                    <img className='icon' src="../../../img/icons8-male-user-100.png" alt="" />
                    {/* <div className='name_time'> */}
                        <p>{name}</p>
                        <p>{time}</p>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};
export default Cart;