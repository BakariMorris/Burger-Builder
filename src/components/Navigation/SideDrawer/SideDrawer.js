import React from 'react';
import Logo from "../../Layout/Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary";



const sideDrawer = (props) => {
    //...
    return (
        <Aux>
        <Backdrop show={true} clicked={}/>
        <div className="SideDrawer">
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