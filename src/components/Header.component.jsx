import React from 'react';
import '../assets/css/Header.component.css';

export default class HeaderComponent extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header id="header-component">
                This is the header beach
            </header>
        )
    }
}