import React, { Component } from 'react'
import ShoppingBasketItem from '../shopping-basket-item'

import {connect} from 'react-redux'
import { removeItemWear, countItemPlus, countItemMinus } from '../../redux/action'

import './shopping-basket.css'

class ShoppingBasket extends Component {
    render() {

        const {items, totalPrice, totalCount, removeItemWear, countItemPlus, countItemMinus} = this.props;
        
        const addedItemWear = Object.keys(items).map((key) => {
            return items[key].items[0]
        })

        return (
            <div className='shopping-basket'>
                <div className='shopping__inner'>
                    <div className='item__inner'>
                        {addedItemWear.map((obj) => {
                            const {id} = obj;
                            return(
                                <ShoppingBasketItem
                                        key={id}
                                        obj={obj}
                                        totalPrice={items[obj.id].totalPrice}
                                        totalCount={items[obj.id].items.length}
                                        removeItemWear={()=>removeItemWear(id)}
                                        countItemPlus = {() => countItemPlus(id)}
                                        countItemMinus = {() => countItemMinus(id)}
                                    />
                        )                               
                        })}
                    </div>
                    <div className='total-price'>
                        <div className='total'>
                            <p className='total-p'>Итого</p>
                            <div className="line"></div>
                            <p className='number'>{totalCount} вещи</p>
                            <p className='price'>Общая сумма <span>{totalPrice}</span>тг</p>
                            <button className='total-btn'>Оформить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({items, totalPrice, totalCount}) => {
    return{
        items, totalPrice, totalCount
    }
}

const mapDispatchToProps = {
    removeItemWear, countItemPlus, countItemMinus
}

export default connect (mapStateToProps, mapDispatchToProps)(ShoppingBasket)