import React, {Fragment} from 'react';
import axios from 'axios';
import HeaderComponent from "./components/Header.component";

export default class Application extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: false,
            videoItem: null,
            videoList: [],
        };

        this.handleSearchVideoByTerm = this.handleSearchVideoByTerm.bind(this);
    }

    async handleSearchVideoByTerm( term ) {
        this.setState({ isLoading: true });

        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: term,
                part: "snippet",
                key: "AIzaSyC-bNL2Hrd7MXuLzHJb9vS2RoiJhOMUK88",
                maxResults: 25,
            }
        });

        console.log(response.data.items);

        this.setState({
           videoList: response.data.items
        });
        // you will have to do something with the response
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
    }

    render() {
        const videoList = this.state.videoList;

        return (
            <Fragment>
                <HeaderComponent handleSearchVideo={this.handleSearchVideoByTerm}/>
                <main className="wrapper">
                    <div className="contentWrapper">
                        {videoList.map( (videoItem, videoKey) =>

                            <div key={videoKey}>asdsd</div>

                        )}
                    </div>
                </main>
            </Fragment>
        )
    }
}
