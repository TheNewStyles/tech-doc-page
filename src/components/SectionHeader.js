import React, { Component } from 'react';

import '../styles/SectionHeader.css';

class SectionHeader extends Component {
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

export default SectionHeader; 