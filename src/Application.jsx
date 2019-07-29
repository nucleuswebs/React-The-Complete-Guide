import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import LayoutComponent from './components/Layout.component';
import { testDispatch } from './store/actions/Todo.actions';
class Application extends React.Component
{
    componentDidMount() {
        this.props.dispatch(testDispatch());
    }

    render() {
        return (
            <Fragment>
                <LayoutComponent />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    todo: state.todo
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps,mapDispatchToProps)(Application)
