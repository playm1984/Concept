import React, { Component } from 'react'

import { Route, Router, Switch } from 'react-router-dom';
import {connect} from 'react-redux'   


import LogOpen from '../log-open'
import MainPage from '../main-page'
import Footer from '../footer'
import Header from '../header'
import ShoppingBasket from '../shopping-basket'
import Outerwear from '../outerwear'



class App extends Component {
  constructor(){
    super()
    this.state = {
      email: null,
      password: null,
      active: true,
      login: 'admin',
      sign: '123'
    }
  }




  render() {
    const {mainItemCategory} = this.props;
    let log = false
    const {active, email, password, login, sign} = this.state;
    console.log(mainItemCategory);
    return (
      <div>
        
        <Header/>     
        {/* {
          active ?
            <LogOpen onAdd = {this.onAddForm}/>
          : */}
        <Switch>
          <Route path='/login' component={LogOpen}/>
          <Route path='/' component={MainPage} exact/>
          <Route path='/basket' component={ShoppingBasket} exact/>
          {
              mainItemCategory.map((obj, index) => {
                return (
                    <Route path={`/${obj}`} component={Outerwear} exact key={index}/>
              )
            })
          }
        </Switch>
        {/* } */}
        <Footer/>
      </div>
    )
  }
}


const mapStateToProps = ({mainItemCategory}) => {
  return{
      mainItemCategory
  }
}



export default connect (mapStateToProps)(App)
