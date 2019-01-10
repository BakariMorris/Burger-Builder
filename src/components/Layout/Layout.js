import React from 'react';
import Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';


const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default layout;