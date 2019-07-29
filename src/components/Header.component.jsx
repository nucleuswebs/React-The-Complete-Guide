import React from 'react';
import brandUrl from '../assets/svg/brand.svg';

import '../assets/css/Header.component.css';

export default class HeaderComponent extends React.Component
{
    render() {
        return(
            <header id="header-component">
                <div className="brand-wrapper">
                    <img src={brandUrl} alt="Academy"/>
                </div>
            </header>
        )
    }
}