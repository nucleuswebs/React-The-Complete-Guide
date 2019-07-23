import React, {Fragment} from 'react';
import axios from 'axios';

import HeaderComponent from "./components/Header.component";

export default class Application extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <HeaderComponent/>
                <main className="wrapper">
                    You will need to make the content here
                </main>
            </Fragment>
        )
    }
}
