import React from 'react';
import brandUrl from '../assets/svg/brand.svg';

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