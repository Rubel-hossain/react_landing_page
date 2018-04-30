import React, { Component } from 'react';

const Buttons = (props) => {

    console.log(props);

    return(
        <div onClick={props.loadMore}>
           {props.cta}
        </div>    
    );
}

export default Buttons;