import React, { Component } from 'react'
import '../style/containers/app-header.scss'
import baseAvatar from '../assets/images/user.jpg'
import { Icon } from 'antd'

class AppHeader extends Component {
    render() { 
        let { menuClick, avatar, menuToggle } = this.props
        return ( 
            <header className='header'>
                <div className="left">
                    <Icon style={{fontSize: '2rem'}} onClick={menuClick} type={menuToggle ? "menu-unfold" : "menu-fold"} />
                </div>
                <div className="right">
                    <img src={avatar ? avatar : baseAvatar} alt='头像'></img>
                </div> 
            </header>
        );
    }
}
 
export default AppHeader;