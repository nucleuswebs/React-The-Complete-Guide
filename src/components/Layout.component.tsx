import * as React from 'react';
import WithReduxHoc from '../hoc/Connect.hoc';
import {handleBackButton, setFilterValue, setSelectedPost} from '../store/actions/Application.actions';

interface Props {
    application: any;
    dispatch: any;
}

interface State {

}

class LayoutComponent extends React.Component<Props, State>
{
    constructor( props: any )
    {
        super(props);
    }

    render() {
        const { postItems, filterValue, selectedPost } = this.props.application;
        return (
            <div>
                { selectedPost === null ?
                    <div>
                        <form>
                            <input
                                value={filterValue}
                                type="text"
                                onChange={(event) => {
                                    event.preventDefault();
                                    this.props.dispatch(setFilterValue(event.target.value));
                                }}
                            />
                        </form>
                        <ul>
                            {
                                 postItems.filter((value,key) => value.isVisible === true).map(( postItem, postItemKey ) =>
                                    <li key={postItem.id} onClick={(event) => {
                                        event.preventDefault();
                                        this.props.dispatch(setSelectedPost(postItem.id));
                                    }}>
                                        {postItem.title}
                                    </li>
                            )}
                        </ul>
                    </div>
                    :
                    <div>
                        <button style={{width: '300px', height: '300px'}}
                        onClick={event => {
                            event.preventDefault();
                            this.props.dispatch(handleBackButton());

                        }}>THIS IS THE BIG BACK BUTTON</button>
                        <h1>{selectedPost.title}</h1>
                        <p>{selectedPost.body}</p>
                        <ul>
                            {selectedPost.comments.map((value) =>
                                <li key={value.id}>
                                    {value.name}<br/><br/><br/><br/><br/><br/><br/><br/>
                                    {value.body}
                                </li>
                            )}

                        </ul>
                    </div>
                }
            </div>
        )
    }
}

export default WithReduxHoc(LayoutComponent);