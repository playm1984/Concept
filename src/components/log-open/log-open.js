import React, { Component } from 'react'
import axios from 'axios'

import './open-log.css'

export default class LogOpen extends Component {

    logIn = event =>{
        event.preventDefault()
        
        
        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('http://localhost:3000/log-open', data)
            .then(res =>{
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })

    }



    render() {
        return (
            <div className='log-open'>
                <form className='log-open_inner' onSubmit = {this.logIn}>
                    <h1 className='inner-title'>Войти</h1>
                    <input type='email' className='inner-inp' placeholder='Логин' name = "email" onChange = {e => this.email = e.target.value}/>
                    <input type='password' className='inner-inp' placeholder='Пароль' name = "password" onChange = {e => this.password = e.target.value}/>
                    <button className='inner-btn' >Войти</button>
                </form>             
            </div>
        )
    }
}
