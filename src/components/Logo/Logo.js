import React from 'react'
import burger from '../../assets/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => {
    return <div className={classes.Logo} style={{height: props.height}}>
        <img src={burger} alt="Logo" />
    </div>
}

export default logo