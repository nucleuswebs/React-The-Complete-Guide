import * as constants from '../constants';

interface CustomActionInterface {
    type: string,
    data: any,
}

interface InitialStateInterface {
    postItems: any[];
    users: any[];
    comments: any[];
    filterValue: string;
    selectedPost: any
}

const initialState = {
    postItems: [],
    users: [],
    comments: [],
    filterValue: '',
    selectedPost: null,
};

const Application = (
    state: InitialStateInterface = initialState,
    action: CustomActionInterface
) =>
{
    switch ( action.type ) {
        case constants.GET_POSTS: {
            const postItems = action.data.map((postItem) => {
                postItem.isVisible = true;
                return postItem;
            });
            return {
                ...state,
                postItems: postItems,
            }
        }

        case constants.GET_USERS: {
            return {
                ...state,
                users: action.data,
            }
        }

        case constants.SET_FILTER_VALUE: {
            const postItems = state.postItems;
            let userId = null;

            state.users.map((user, userKey) => {
               if (user.email.includes(action.data)) {
                   userId = user.id;
               }
            });

            postItems.map((postItem, postItemKey) => {
               if( action.data === '') {
                   postItem.isVisible = true;
               }

               if (action.data !== '') {
                   if (postItem.userId === userId) {
                       postItem.isVisible = true;
                   } else {
                       postItem.isVisible = false;
                   }
               }

               return postItem;
            });

            return {
                ...state,
                filterValue: action.data,
                postItems: postItems,
            }
        }

        case constants.GET_COMMENTS: {
            return {
                ...state,
                comments: action.data
            }
        }

        case constants.SET_SELECTED_POST: {
            let selectedItem = null;

            state.postItems.map((value) => {
                if( value.id === action.data) {
                    selectedItem = value;
                }

                selectedItem.comments = state.comments.filter((comment) => {
                    return comment.postId === action.data;
                })
            });
            return {
                ...state,
                selectedPost: selectedItem,
            }
        }

        case 'BACK_BUTTON_EVENT': {
            return {
                ...state,
                selectedPost: null,
            }
        }

        default:
            return state;
    }
};

export default Application;