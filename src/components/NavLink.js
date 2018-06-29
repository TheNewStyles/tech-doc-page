import React, { Component } from 'react';

class NavLink extends Component {
    render() {
      return (
          <a className="nav-link" href={this.props.href}>{this.props.test}</a>
        );
    }
}

export default NavLink; 