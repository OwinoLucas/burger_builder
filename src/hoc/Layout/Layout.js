import React, { Component } from "react";
import Aux from '../Aux/Aux'
import  './Layout.css'
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/Sidedrawer/SideDrawer";

class Layout extends Component { 
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = ( ) =>{
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    showDrawer={this.state.showSideDrawer }
                    closeDrawer={this.sideDrawerClosedHandler}
                />
                
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
    
};

export default Layout; 