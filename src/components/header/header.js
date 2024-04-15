import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <p>
                    Reddit Project
                </p>
            </div>
            <form classname="search" onSubmit=''>
                <imput
                    type="text"
                    placeholder="Search"
                    value='' //Need to add value here
                    onChange='' //Need to add value here
                    aria-label="Search Posts"
                />
                <button 
                    type="submit" 
                    onClick=''
                    aria-label="Search">
                </button>
            </form>
        </header>
    );
};

export default Header;