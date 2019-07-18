import React from 'react';
import SearchComponent from "./Search.component";

import '../assets/css/Header.component.css';
import brandUrl from '../assets/svg/brand.svg';

export default class HeaderComponent extends React.Component
{
    render() {
        return(
            <header id="header-component">
                <div className="brand-wrapper">
                    <img src={brandUrl} alt="Academy"/>
                </div>
                <SearchComponent />
            </header>
        )
    }
}