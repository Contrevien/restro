import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl 
                            key={ctrl.label} 
                            label={ctrl.label} 
                            clickedMore={() => props.more(ctrl.type)}
                            clickedLess={() => props.less(ctrl.type)}
                            disabled={props.disabled[ctrl.type]} />
            })}
            <button 
                className={classes.OrderButton} 
                disabled={props.purchase}
                onClick={props.purchasing}>PROCEED TO PURCHASE</button>
        </div>
    );
}

export default buildControls;