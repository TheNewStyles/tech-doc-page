import React, { Component } from 'react';

import '../styles/ExternalLink.css';

class ExternalLink extends Component {
    render() {
      return (
        <a href={this.props.link}>{this.props.linkText}</a>
        );
    }
}

export default ExternalLink; 