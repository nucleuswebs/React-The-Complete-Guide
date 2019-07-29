import React, {Fragment} from 'react';
import LayoutComponent from './components/Layout.component';


export default class Application extends React.Component
{
    render() {
        return (
            <Fragment>
                <LayoutComponent />
            </Fragment>
        )
    }
}
