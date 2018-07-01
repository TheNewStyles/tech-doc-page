import React, { Component } from 'react';

import '../styles/SectionHeader.css';

class SectionHeader extends Component {
    render() {
      return (
        <header>
            <h2>
                {this.props.title}
            </h2>            
        </header>
        );
    }
}

export default SectionHeader; 