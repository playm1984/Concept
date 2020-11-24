import React, { Component } from 'react'

import './outerwear-item.css'

export default class OuterWearItem extends Component {
    render() {

        const {img, title, delivery, deliveryDay, price, count, id} = this.props.item;
        const { countItemMinus, addWearToCart, addedCout } = this.props;

        const onAddWear = () => {
            const obj = {img, title, delivery, deliveryDay, price, count, id }
            addWearToCart(obj)
        }
        console.log(addedCout);
        return (
            <div className='outer-wear_item'>   
                <img src={img} alt='a' className='img-item'/>
                <div className='info-item'>
                    <div className='info-item-text'>
                        <p className='title-item'>{title}</p>
                        <p className='item-delivery'>{delivery}<span className='item-days'>{deliveryDay}</span></p>
                        <p className='item-price'>{price}</p>
                    </div>
                                        
                    <div className='item-plus-minus'>
                        <div className='item-plus' onClick={onAddWear}></div>
                            <p>{addedCout}</p>
                        <div className='item-minus' onClick={countItemMinus}></div>
                    </div>
                </div>
                <div className='item-div-question'>
                    <div className='item-question'></div>
                </div>
            </div>
        )
    }
}
