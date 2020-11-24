import React, { Component } from 'react'

import {connect} from 'react-redux'   
import { setCategory } from '../../redux/action'

import { Link } from 'react-router-dom';

import './main-page.css'

class MainPage extends Component {
    
    render() {
        const {wearMainPage, setCategory, mainItemCategory} = this.props;
        
        return (
            <div className="mainPage">
                <div className='mainPage_inner'>

                    <p className='category-p'>Категории</p>

                        <div className='map-item'>

                            {wearMainPage.map(item => {
                                    return(
                                        <div key={item.id} className='itemShoes'>
                                            <img src={item.img} alt='shoes' className='shoesImg'/>
                                            <h2 className='titleShoes'>{item.title}</h2>
                                            <div className='shoesLink'>
                                                {mainItemCategory && mainItemCategory.map((name, id) => (     
                                                        <Link
                                                            to={`/${name}`} 
                                                            key={`${name}_${id}`} 
                                                            className='link'                                                         
                                                            onClick={()=>setCategory(name)}>
                                                            {name}
                                                        </Link>                                   
                                                ))}                                               
                                            </div>
                                        </div>
                                    )
                                })}                              
                        </div>                           
                </div>  
            </div>
        )
    }
}

const mapStateToProps = ({wearMainPage, mainItemCategory}) => {
    return{
        wearMainPage, mainItemCategory
    }
}

const mapDispatchToProps = {
    setCategory
}


export default connect (mapStateToProps, mapDispatchToProps)(MainPage)
