import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import menu from '../../../assets/menu.png'

const toolbar = (props) => {
    return <header className={classes.Toolbar}>
        <div className={classes.MobileOnly} onClick={props.opened}>
            <img src={menu} alt="Menu" />
        </div>
        <div style={{height: '80%'}}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
}

export default toolbar