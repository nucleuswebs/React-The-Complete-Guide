import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
    getTodoList, toggleTodoStatus, filterTodoByStatus,
    selectTodoItem, changeTodoItemTitle, changeTodoItemStatus, updateTodoItem
} from "./store/actions/Todo.actions";

class Application extends React.Component
{
    componentWillMount() {
        this.props.dispatch(getTodoList());
    }

    render() {
        const selectedItem = this.props.todo.selectedItem;
        const items = this.props.todo.items.filter((value) => value.isVisible);
        return (
            <Fragment>
                <section>
                    <div style={{
                        width: '100%',
                        background: 'red',
                    }}>
                        <button onClick={(event) => {
                            event.preventDefault();
                            this.props.dispatch(filterTodoByStatus('all'));
                        }}>
                            Show All
                        </button>
                        <button onClick={(event) => {
                            event.preventDefault();
                            this.props.dispatch(filterTodoByStatus('uncompleted'));
                        }}>
                            Show Uncompleted
                        </button>
                        <button onClick={(event) => {
                            event.preventDefault();
                            this.props.dispatch(filterTodoByStatus('completed'));
                        }}>
                            Show Completed
                        </button>
                    </div>
                    <ul className="todoList">
                        { items.length === 0 && <div>No todo items found</div>}
                        { items.length > 0  && items.map(( item, itemKey ) =>
                            <li
                                key={item.id}
                            >
                                <span>{item.title}</span> <br/>
                                <span>{item.completed.toString()}</span>
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    this.props.dispatch(selectTodoItem(item.id));
                                }}>Edit</button>
                            </li>
                        )}
                    </ul>

                    {selectedItem !== null &&
                        <form>
                            <input
                                onChange={(event) => {
                                    this.props.dispatch(changeTodoItemTitle(event.target.value))
                                }}
                                value={selectedItem.title}
                            />
                            <select
                                onChange={(event) => {
                                    this.props.dispatch(changeTodoItemStatus(event.target.value));
                                }}
                                value={selectedItem.completed}
                            >
                                <option value={true}>Completed</option>
                                <option value={false}>Uncompleted</option>
                            </select>
                            <button onClick={(event => {
                                event.preventDefault();
                                this.props.dispatch(updateTodoItem());
                            })}>
                                Update
                            </button>
                        </form>
                    }
                </section>
            </Fragment>
        )
    }
}

const mapStateToProps = reduxState => ({
    todo: reduxState.todo
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps,mapDispatchToProps)(Application)
