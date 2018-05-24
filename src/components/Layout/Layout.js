import React from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component{

    state = {
        SideDrawer: false
    }

    sideDrawerHandler = () => {
        let temp = this.state.SideDrawer;
        this.setState({ SideDrawer: !temp });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar opened={this.sideDrawerHandler}/>
                <SideDrawer open={this.state.SideDrawer} closed={this.sideDrawerHandler}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;