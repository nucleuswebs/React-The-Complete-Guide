import React, {Fragment} from 'react';
import axios from 'axios';
import HeaderComponent from "./components/Header.component";

export default class Application extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleSearchVideoByTerm = this.handleSearchVideoByTerm.bind(this);
    }

    componentDidMount() {
    }

    async handleSearchVideoByTerm( term ) {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: term,
                part: "snippet",
                key: "AIzaSyC-bNL2Hrd7MXuLzHJb9vS2RoiJhOMUK88",
                maxResults: 25,
            }
        });

        console.log(response);
        // you will have to do something with the response
    }

    render() {
        return (
            <Fragment>
                <HeaderComponent/>
                <main className="wrapper">
                    You will need to make the content here
                </main>
            </Fragment>
        )
    }
}
