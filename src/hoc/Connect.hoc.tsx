import React from 'react';
import { connect } from 'react-redux';
import {getComments, getPosts, getUsers} from '../store/actions/Application.actions';

interface Props {
    dispatch: any
}

interface State {

}

export default ( WrappedComponent ) => {
    class ReduxHoc extends React.Component<Props, State>
    {
        componentWillMount(): void
        {
            this.props.dispatch(getPosts());
            this.props.dispatch(getUsers());
            this.props.dispatch(getComments());
        }

        render(): React.ReactNode {
            return (
                <div>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }

    const mapStateToProps = ( reduxState ) => ({
        application: reduxState.application
    });

    const mapDispatchToProps = dispatch => ({ dispatch });

    return connect(mapStateToProps, mapDispatchToProps)(ReduxHoc);
}