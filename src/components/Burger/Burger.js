import React from 'react';
import classes from './Burger.css';
import Ingredients from './Ingredients/Ingredients';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientsKey => {
            return [...Array(props.ingredients[ingredientsKey])].map((_, i) => {
                return <Ingredients key={ingredientsKey + i} type={ingredientsKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <Ingredients type='bread-top' />
            {transformedIngredients}
            <Ingredients type='bread-bottom' />
        </div>
    );
}

export default burger;