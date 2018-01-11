import React from 'react';
import classes from './Layout.css';

const layout = ( props ) => {
    return (
        <React.Fragment>
            <div></div>
            <main className={classes.content}>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default layout