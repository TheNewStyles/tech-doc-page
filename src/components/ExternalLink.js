import React, { Component } from 'react';

import '../styles/ExternalLink.css';

class ExternalLink extends Component {
    render() {
      return (
        <a className="external-link" href={this.props.link}>{this.props.linkText}</a>
        );
    }
}

export default ExternalLink; 