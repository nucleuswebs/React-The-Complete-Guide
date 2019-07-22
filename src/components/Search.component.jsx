import React from 'react';
import '../assets/css/Search.component.css';

export default class SearchComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            searchTerm: null,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(term) {
        this.setState({
            searchTerm: term
        });
    }

    handleFormSubmit() {
        const searchTerm = this.state.searchTerm;

        this.props.handleSearchVideo(searchTerm);
        this.setState({
            searchTerm: null
        });
    }

    render() {
        return(
            <div id="search-component">
                <form>
                    <input type="text" placeholder="Search for your video..." onChange={function(event) {
                        this.handleInputChange(event.target.value)
                    }.bind(this)}/>
                    <button onClick={function(event) {
                        event.preventDefault();
                        this.handleFormSubmit();
                    }.bind(this)}>Search</button>
                </form>
            </div>
        )
    }
}