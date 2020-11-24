import React, { Component } from 'react'

import './shopping-basket-item.css'

export default class ShoppingBasketItem extends Component {
    render() {
        const { title, delivery, deliveryDay } = this.props.obj;
        const { totalPrice, totalCount, removeItemWear, countItemPlus, countItemMinus } = this.props;
        return (
            <div className='total-items'>
                <div className='items'>
                    <div className='items-question'>
                        <div className='question'></div>
                    </div>
                    <div className='items-img'></div>
                    <div className='item-other'>
                        <p className='item'>{title}</p>
                        <div className='item-delivery'>
                            <p className='delivery'>{delivery}<span className='days'>{deliveryDay}</span></p>
                            <div className='plus-minus'>
                                <div className='minus' onClick={countItemMinus}></div>
                                    <p>{totalCount}</p>
                                <div className='plus' onClick={countItemPlus}></div>
                            </div>
                            <p className='item-price'>{totalPrice}</p>
                        </div>
                    </div>
                            
                    <div className='items-remove' onClick={removeItemWear}>
                        <div className='remove'></div>
                    </div>
                </div>
            </div>
        )
    }
}
