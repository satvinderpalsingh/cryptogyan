import React from 'react'
import {Switch,Link,Route} from 'react-router-dom'
import {Typography,Layout,Space} from 'antd'
import {Navbar} from './components'

const app = () => {
    return (
        <div className='app'>
            <div className='Navbar'>
                <Navbar></Navbar>
            </div>
            <div className='main'>
            </div>
            <div className='Footer'>
            </div>
        </div>
    )
}

export default app
