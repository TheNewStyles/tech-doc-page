import React, { Component } from 'react';

import NavLink from './NavLink';

class NavBar extends Component {
    constructor() {
        super();
        const numbers = [1, 2, 3, 4, 5]; // make a dictionary to match these together?
        const sectionIds = ["#intro", "#blah"]; //Add #id tages for each section to nav to 
        this.listItems = numbers.map((numbers) =>
            <NavLink key={numbers} href={sectionIds} test={numbers} />
        );
    }

    render() {
        return (
            <nav id="navbar">
                <header>ES6 Documentation</header>          
                {this.listItems}
            </nav> 
        );
    }
}

export default NavBar; 
