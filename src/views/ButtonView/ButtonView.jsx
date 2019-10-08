import React, { Component } from 'react'
import CustomBreadcrumb from '../../components/CustomBreadcrumb'

class ButtonView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div><CustomBreadcrumb arr={['通用', '按钮']}></CustomBreadcrumb></div>
                <div>ButtonView 页面</div>
            </div>
         );
    }
}
 
export default ButtonView;