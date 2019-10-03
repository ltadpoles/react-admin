import React from 'react'
import '../style/containers/app-header.scss'
import avatar from '../assets/images/user.jpg'

export default props => (
    <header className='header'>
        <div className="left">React 管理系统</div>
        <div className="right">
            <img src={props.avatar ? props.avatar : avatar} alt='头像'></img>
        </div> 
    </header>
)