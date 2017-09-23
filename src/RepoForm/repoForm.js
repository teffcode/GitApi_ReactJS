import React from 'react';

class repoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: ''
        };
    }

    handleOnChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        // Call function props.onSubmit with the search input value
        this.props.onSubmit(this.state.searchQuery);

        // Reset state.searchQuery to ''
        this.setState({
            searchQuery: ''
        });
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        type="search"
                        placeholder="Search repositories..."
                        value={this.state.searchQuery}
                        onChange={this.handleOnChange}
                    />
                    <button
                        type="submit"
                    >
                        Search
                    </button>                          
                </form>
            </div>
        )
    }
}

export default repoForm;