import React from 'react';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        });
    
    return(
        <React.Fragment>
            <div style={{float: 'left'}}>
                <h3>Your Order</h3>
                <ul>
                    {ingredients}
                </ul>
                <hr/>
                <p><strong>Price: ${props.price}</strong></p>
            </div>
            <div 
                style={{float: 'right', borderLeft: '1px dashed black', marginTop: '30px', height: '115px', paddingLeft: '20px'}}>
                <h1>Thank You!</h1>
            </div>
        </React.Fragment>
    );
}

export default orderSummary;