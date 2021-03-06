import React from 'react';
import Logo from "../../../hoc/Layout/Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary/Auxillary";



const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open){
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
        <div>
            <Logo height={40}></Logo>
        </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
        </div>
        </Aux>
    );
    };

export default sideDrawer;