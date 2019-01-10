import React from 'react';
import classes from "./Modal.css";
import Aux from "../../../hoc/Auxillary";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className="Modal" 
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(1)',
            opacity: props.show ? '1' : '0',
            display: props.show ? 'block' : 'none'
        }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;