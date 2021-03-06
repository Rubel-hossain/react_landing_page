import React, { Component } from 'react';
import './layout.css';
import Header from '.././Header/header';



class Layout extends Component {

    state = {

        showNav: false
    }

    toggleSideNav = (action) => {

        this.setState({
            showNav: action
        });
    }

    render(){

        return(

            <div>
               <Header
                showNav = {this.state.showNav}
                onHideNav = {()=>this.toggleSideNav(false)}
                onShowNav = {()=>this.toggleSideNav(true)}
               />
               {this.props.children}
            </div>    
        );
    }
}

export default Layout;

