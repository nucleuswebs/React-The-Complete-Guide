import React from 'react';

export default class FormComponent extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            completed: false,
        }
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleChangeCompleted = (event) => {
        this.setState({
            completed: event.target.value
        })
    }

    submitForm = (e) => {
        const title = this.state.title;
        const completed = this.state.completed;

        this.props.addTodoList(title,completed);
    }

    render() {
        return(
            <form style={{height: '100%'}}>
                <input type="text" onChange={(event) => {
                    this.handleChangeTitle(event);
                }} placeholder="Add your title here"/>
                <select onChange={(event) => {
                    this.handleChangeCompleted(event);
                }}>
                    <option value="true">Completed</option>
                    <option value="false">Uncompleted</option>
                </select>
                <button onClick={
                    (e) => {
                        e.preventDefault();
                        this.submitForm(e)
                    }}
                >Add Task</button>
            </form>
        )
    }
}