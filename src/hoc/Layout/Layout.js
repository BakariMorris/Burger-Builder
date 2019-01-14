import React, {Component} from 'react';
import Aux from '../Auxillary/Auxillary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";




class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerToggle = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        return(<Aux>
            <Toolbar clicked={this.sideDrawerToggle}></Toolbar>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggle}></SideDrawer>
            <main className="content">
                {this.props.children}
            </main>
            </Aux>
        );
    }

}

export default Layout;