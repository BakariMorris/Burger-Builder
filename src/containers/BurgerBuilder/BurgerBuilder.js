import React, { Component } from 'react';

import Aux from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner.js";
import axios from "../../axios-orders.js";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.4,
    bacon: 0.5
};

class BurgerBuilder extends Component{
        state = {
            ingredients:{
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false,
            loading: false
        }


        updatePurchaseState(ingredients){
            const sum = Object.keys(ingredients).map(igKey => {
                return ingredients[igKey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);
            this.setState({purchasable: sum > 0});
        }


        addIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount +1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;

            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAddition;

            this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
            this.updatePurchaseState(updatedIngredients);
        }


        removeIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            if(oldCount <= 0){
                return;
            }
            const updatedCount = oldCount -1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;

            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;

            this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
            this.updatePurchaseState(updatedIngredients);
        }

        purchaseHandler = () =>{
            this.setState(({purchasing: true}));
        }


        purchaseCancelHandler = () =>{
            this.setState({purchasing: false});
        }

        purchaseContinueHandler = () => {
            this.setState({loading: true,});
            const order = {
                ingredients: this.state.ingredients,
                price: this.state.totalPrice,
                customer: {
                    name: "Bakari",
                    address: {
                        street: "Da Block",
                        zipCode: "12312321",
                        country: "The Best"
                    },
                email: "bakari_morris@yahoo.com",
                },
                deliveryMethod: "fastest"
            }
            axios.post('/orders.json', order)
            .then(response => this.setState({loading: false, purchasing: false}))
            .catch(error => this.setState({loading: false, purchasing: false}));
        }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        let orderSummary = <OrderSummary cancel={this.purchaseCancelHandler} continue={this.purchaseContinueHandler} price={this.state.totalPrice.toFixed(2)}  ingredients={this.state.ingredients}></OrderSummary>;
        
        if(this.state.loading){
            orderSummary = <Spinner/>;
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls price={this.state.totalPrice} ingredientAdded ={this.addIngredientHandler} purchasable={this.state.purchasable} purchasing={this.purchaseHandler} disabled = { disabledInfo} ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}/>
                
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder);