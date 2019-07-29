import axios from 'axios';

export const getTodoList = () => {
    return function( dispatch ) {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                dispatch({
                    type: 'GET_TODO_LIST',
                    data: response.data
                })
            })
    }
};

export const toggleTodoStatus = ( todoId ) => {
    return function( dispatch ) {
        dispatch({
            type: 'TOGGLE_TODO_ITEM',
            data: todoId
        })
    }
};

export const filterTodoByStatus = ( status ) => {
    return function( dispatch ) {
        dispatch({
            type: 'FILTER_TODO_ITEMS_BY_STATUS',
            data: status
        })
    }
};

export const selectTodoItem = ( itemId ) => {
    return function( dispatch ) {
        dispatch({
            type: 'SELECT_TODO_ITEM',
            data: itemId
        })
    }
};

export const changeTodoItemTitle = ( title ) => {
    return function(dispatch) {
        dispatch({
            type: 'EDIT_TODO_ITEM_TITLE',
            data: title,
        })
    }
};

export const changeTodoItemStatus = ( status ) => {
    return function(dispatch) {
        dispatch({
            type: 'EDIT_TODO_ITEM_STATUS',
            data: status,
        })
    }
};

export const updateTodoItem = () => {
    return function(dispatch) {
        dispatch({
            type: 'UPDATE_TODO_ITEM',
        });
    }
};