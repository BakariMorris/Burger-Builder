import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Layout/Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo/>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;