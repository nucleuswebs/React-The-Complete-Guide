import React, {Fragment} from 'react';
import axios from 'axios';

import HeaderComponent from "./components/Header.component";
import LoaderComponent from "./components/Loader.component";
import FormComponent from "./components/Form.component";

export default class Application extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: false,
            todoList: [],
            todoItem: null,
        }
    }

    componentWillMount() {
        this.toggleLoader();

        this.getTodoList().then((response) => {
           const todoItems = response.data;
           const filteredItems = todoItems.filter(function(todoItem,todoKey) {
              return todoItem.userId === 4;
           });

           this.setState({
               todoList: filteredItems,
           });

           this.toggleLoader();
        });
    }

    toggleLoader = () => {
        const isLoading = this.state.isLoading;
        this.setState({isLoading: !isLoading})
    }

    addItemInTodoList = (title, completed) => {
        const todoList = this.state.todoList;

        const todoItem = {
            title: title,
            completed: completed,
            userId: 4
        };

        todoList.push(todoItem);

        this.setState({
            todoList: todoList
        })
    };

    getTodoList() {
        return axios.get('https://jsonplaceholder.typicode.com/todos');
    }

    changeStatus = (todoKey) => {
        const todoList = this.state.todoList;

        todoList[todoKey].completed = !todoList[todoKey].completed;

        this.setState({
            todoList: todoList
        })
    }



    render() {
        console.log(this.state);
        const isLoading = this.state.isLoading;
        const todoList = this.state.todoList;

        return (
            <Fragment>
                <HeaderComponent/>
                <FormComponent addTodoList={this.addItemInTodoList}/>
                <main className="wrapper">
                    <h1>Todo List</h1>
                    <ol>
                        {
                            todoList.map((todoItem, todoKey) =>
                                <li
                                    key={todoKey}
                                    onClick={(event) => {
                                        this.changeStatus(todoKey);
                                    }}
                                >
                                    <span>{todoItem.title}</span>
                                    <br/>
                                    <span><b>{todoItem.completed.toString()}</b></span>
                                </li>
                            )
                        }
                    </ol>
                </main>
                <LoaderComponent isLoading={isLoading} />
            </Fragment>
        )
    }
}
