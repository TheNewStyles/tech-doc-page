import React, { Component } from 'react';

class SectionHeader extends Component {
    render() {
      return (
        <header>
            {this.props.title}
        </header>
        );
    }
}

export default SectionHeader; 