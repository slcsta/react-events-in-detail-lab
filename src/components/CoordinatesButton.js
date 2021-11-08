// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {
   handleClick = (event) => {
    // takes in one prop: onReceiveCoordinates - a function passed down from index.js
    // this function is just logging whatever is passed into it
    // the event data is an array w/elements X and Y coordinates of the mouse
    // pass this event data array in as an argument for the onReceiveCoordinates prop
    // b/c function just logs whatever is passed in, it should just log x and y
    // use event.clientX and event.clientY b/c they provide the current x/y position of the mouse
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    
    }
    // render a button and onclick of button create an array w/elements x and y of muouse
    render() {
        return (
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}