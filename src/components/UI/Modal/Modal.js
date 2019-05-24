import React, {Component} from 'react';
import classes from "./Modal.css";
import Aux from "../../../hoc/Auxillary/Auxillary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;

    }

    componentWillUpdate(){
        console.log("Modal will update");
    }

    render () {
        return(
            <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className="Modal" 
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(1)',
                    opacity: this.props.show ? '1' : '0',
                    display: this.props.show ? 'block' : 'none'
                }}>
                    {this.props.children}
                </div>
            </Aux>

        );
    }
}

export default Modal;