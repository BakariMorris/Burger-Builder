import React from "react";
import classes from "./Logo.css";
import burgerLogo from "../../../assets/images/burger-logo.png";

const logo = (props) => (
    <div className={"Logo"} style={{height: props.height}}>
        <img src={burgerLogo} alt="Beautiful picture of a burger"/>
    </div>
);

export default logo;