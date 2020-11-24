import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { setSearchQuery } from '../../redux/action'

import './header.css'

//сделать state  в компоненте и по нажатию на enter или лупу отправлять state с компонента с текстом в стейт редусера. а потом его фильтровать. как в инстаграмме addpost
class Header extends Component {
    render() {
        const {searchQuery, setSearchQuery} = this.props;
        return (
            <div className="header">
                <div className='header-main'>
                    <div className='header-menu-btn'>
                        <Link to={'/'} className='btn' href='#'>
                            <span>Главная</span>
                        </Link>

                        <Link to={'/basket'} className='btn' href='#'>
                            <span>Корзина </span>
                        </Link>
                    </div>
                    <h1 className='logo'>Concept</h1>
                    <div className='header-right'>
                        <form className='searh-header'>
                            <input type='text' className="search-img"></input>
                            <input 
                                type='text' 
                                placeholder='Найти вещь' 
                                className="search-input" 
                                onChange={event => setSearchQuery(event.target.value)}
                                value={searchQuery}>    
                            </input>
                        </form>
                        <div className='header-login'>
                            <Link to={'/login'} className='login-btn' href='#'>
                                <p>Войти</p> 
                                <div className='log'></div>
                            </Link>
                        </div>
                    </div>            
                </div>                         
            </div>
        )
    }
}

const mapStateToProps = ({searchQuery}) => {
    return {searchQuery}
}

const mapDispatchToProps = {
    setSearchQuery
}

export default connect (mapStateToProps, mapDispatchToProps)(Header)