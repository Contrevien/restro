import React from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => {
    return (
        <React.Fragment>
            <Toolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default layout