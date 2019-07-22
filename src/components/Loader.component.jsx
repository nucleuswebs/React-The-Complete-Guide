import React from 'react';
import '../assets/css/Loader.component.css';

export default class LoaderComponent extends React.Component
{
    render() {
        const isLoading = this.props.isLoading;
        let loaderStatus = '--isInactive';

        if( isLoading === true ) {
            loaderStatus = '--isActive';
        }

        return(
            <section id="loader-component" className={loaderStatus} />
        )
    }
}