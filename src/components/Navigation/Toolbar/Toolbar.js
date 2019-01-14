import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../hoc/Layout/Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.clicked}/>
        <div>
            <Logo height={80}/>
        </div>
        <nav className="Desktop">
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;