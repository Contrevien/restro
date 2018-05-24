import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import back from '../../../assets/back.png'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <React.Fragment>   
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className = {attachedClasses.join(' ')}>
                <div className={classes.Back} onClick={props.closed}>
                    <img src={back} alt="Back" style={{height: '20px'}}/>
                </div>
                <div style={{height: '11%', marginBottom: '32px'}}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
}

export default sideDrawer;