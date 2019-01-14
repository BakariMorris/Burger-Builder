import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
    componentWillUpdate() {
        console.log("Order Summary Updated");
    }
    
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
            <li>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
        )});


    return(
    <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>For Only <strong>${this.props.price}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
    </Aux>
    );
    }
};

export default OrderSummary;