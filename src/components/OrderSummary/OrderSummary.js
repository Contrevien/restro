import React from 'react';
import Button from '../UI/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        });
    
    return(
        <React.Fragment>
            <div>
                <h3>Your Order</h3>
                <ul>
                    {ingredients}
                </ul>
                <hr/>
                <p><strong>Price:  &#8377;{props.price.toFixed(2)}</strong></p>
                <Button btnType="Danger" clicked={props.cancellation}>Cancel</Button>
                <Button btnType="Success" clicked={props.continue}>Continue</Button>
            </div>
        </React.Fragment>
    );
}

export default orderSummary;