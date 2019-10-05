import React, { Component } from 'react'
import '../style/containers/app-header.scss'
import baseAvatar from '../assets/images/user.jpg'
import { Button } from 'antd'
import store from '../store'


class AppHeader extends Component {
    render() { 
        let { menuClick, avatar } = this.props
        return ( 
            <header className='header'>
                <div className="left">
                    <Button onClick={menuClick}>DefaultLayout</Button>
                </div>
                <div className="right">
                    <img src={avatar ? avatar : baseAvatar} alt='头像'></img>
                </div> 
            </header>
        );
    }
}
 
export default AppHeader;