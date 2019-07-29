const initialState = {
    items: [],
    selectedItem: null,
    total: 0,
};

const todos = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'GET_TODO_LIST':
            const retrievedItems = action.data;
            retrievedItems.map((value,key) => {
                value.isVisible = true;
                return value;
            });

            return {
                ...state,
                items: action.data,
                total: action.data.length
            };
        case 'TOGGLE_TODO_ITEM':
            let todoItems = state.items.map((item, key) => {
               if (item.id === action.data) {
                   item.completed = !item.completed;
               }

               return item;
            });

            return {
                ...state,
                items: todoItems,
            };
        case 'FILTER_TODO_ITEMS_BY_STATUS':
            let filterStatus = action.data === 'uncompleted' ? false : true;

            let filteredItems = state.items.map((value,key) => {
                if (action.data === 'all') {
                    value.isVisible = true;
                    return value;
                }

                value.isVisible = value.completed === filterStatus;
                return value;
            });

            return {
                ...state,
                items: filteredItems,
            };
        case 'SELECT_TODO_ITEM':
            const selectedItem = state.items.filter((value, key) => {
                return value.id === action.data
            });
            return {
                ...state,
                selectedItem: selectedItem[0]
            };
        case 'EDIT_TODO_ITEM_TITLE':
            let editedSelectedItem = state.selectedItem;
            editedSelectedItem.title = action.data;

            return {
                ...state,
                selectedItem: editedSelectedItem,
            };
        case 'EDIT_TODO_ITEM_STATUS':
            let editedStatusItem = state.selectedItem;
            editedStatusItem.completed = action.data;

            return {
                ...state,
                selectedItem: editedStatusItem,
            };
        case 'UPDATE_TODO_ITEM':
            let updatedItemsList = state.items.map((value,key) => {
                if (value.id === state.selectedItem.id) {
                    value = state.selectedItem;
                }
                return value;
            });

            return {
                ...state,
                items: updatedItemsList
            };
        default:
            return state;
    }
};

export default todos;