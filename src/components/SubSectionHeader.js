import React, { Component } from 'react';

import '../styles/SubSectionHeader.css';

class SubSectionHeader extends Component {
    render() {
      return (
        <header>
            <h3 id={this.props.id}>
                {this.props.title}
            </h3>
        </header>
        );
    }
}

export default SubSectionHeader;