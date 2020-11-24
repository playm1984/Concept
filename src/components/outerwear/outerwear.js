import React, { Component } from 'react'

import OuterWearItem from '../outerwear-item'

import {connect} from 'react-redux'
import { addWearToCart, countItemMinus } from '../../redux/action'

import './outerwear.css'
class OuterWear extends Component {

    render() {

        const { category, addWearToCart, items, countItemMinus } = this.props;
        console.log(category)

        return (
            <div className='outer-wear'>
                <p className='bredcrumds'>Hello</p> 

                <div className='outer-wear-main'>

                    {
                        category && category.map(item => {
                            const {id} = item;
                            return(
                                <OuterWearItem key={id}
                                    item={item}
                                    addedCout = {items[item.id] && items[item.id].items.length }
                                    addWearToCart = {(id) => addWearToCart(id)}
                                    countItemMinus ={()=>countItemMinus(id)}
                                />
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}


const mapStateToProps = ({items, category}) => {
    return{
        items, category
    }
}

const mapDispatchToProps = {
    addWearToCart, countItemMinus
}

export default connect (mapStateToProps, mapDispatchToProps)(OuterWear)