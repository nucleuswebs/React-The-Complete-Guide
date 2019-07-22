import React from 'react';
import SearchComponent from "./Search.component";

import '../assets/css/Header.component.css';
import brandUrl from '../assets/svg/brand.svg';

export default class HeaderComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <header id="header-component">
                <div className="brand-wrapper">
                    <img src={brandUrl} alt="Academy - Youtube Website"/>
                </div>
                <SearchComponent handleSearchVideo={this.props.handleSearchVideo} />
            </header>
        )
    }
}