import React, { Component } from 'react';

import NavLink from './NavLink';

class NavBar extends Component {
  constructor() {
    super();
    const numbers = [1, 2, 3, 4, 5];
    this.listItems = numbers.map((numbers) =>
      <NavLink href={numbers} test={numbers} />
    );

  }

  render() {
    return (
      <nav id="navbar">
        {/* <header>ES6 Documentation</header>           */}
        {this.listItems}
      </nav> 
      );
  }
}

export default NavBar; 
