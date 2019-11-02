import React from 'react';
import ReactDOM from 'react-dom';

const NavComponent = React.createClass({
    //Using href links to new pages
    render: function () {
        return (
            <nav>
                <div className="mainDiv">
                    <a href='#'>Login</a>
                    <a href='#'>Register</a>
                </div>
            </nav>
        );

    },




});