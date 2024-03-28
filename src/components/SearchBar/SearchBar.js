import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchAction } from '../actions/searchActions'; //Check to make sure search action is defined

const searchBar = ({ searchAction }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.trigger.value);
    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        //Dispatching the search action with the search term
        searchAction(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default connect(null, { searchAction })(searchBar);