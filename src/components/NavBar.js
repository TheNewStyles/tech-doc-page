import React, { Component } from 'react';

import NavLink from './NavLink';
import '../styles/NavBar.css';

class NavBar extends Component {
    constructor() {
        super();
        let dict = this.populateDictionary();
        this.listItems = dict.map((dict, i) =>
            <NavLink key={dict.key} href={dict.value} test={dict.value} />
        );
    }

    populateDictionary() {
        const hrefs = ["#intro", "#blah"];
        let dict = []; 

        hrefs.forEach(function (href, index) {
            dict.push({
                key: index,
                value: href
            });
        });

        return dict;
    } 

    render() {
        return (
            <nav id="navbar">
                <header>
                    <h2>ES6 Documentation</h2>
                </header>          
                {this.listItems}
            </nav> 
        );
    }
}

export default NavBar; 
