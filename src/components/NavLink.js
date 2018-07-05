import React, { Component } from 'react';

import '../styles/NavLink.css';

class NavLink extends Component {
    render() {
      return (
          <li>
            <a className="nav-link" href={this.props.href}>{this.props.number}. {this.props.text}</a>
          </li>
        );
    }
}

export default NavLink;