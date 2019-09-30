import React, { Component } from 'react'
import Button from 'antd/es/button'
import 'antd/dist/antd.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                 <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default App