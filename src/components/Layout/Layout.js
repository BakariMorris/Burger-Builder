import React from 'react';
import Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <SideDrawer></SideDrawer>
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default layout;