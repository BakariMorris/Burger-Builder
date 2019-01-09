import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './Ingredient/Ingredient';

const burger = (props) => {
    const ingreds = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key = {igKey + i} type={igKey} />;
        });
    });
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {ingreds}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default burger;