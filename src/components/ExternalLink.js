import React, { Component } from 'react';

import '../styles/ExternalLink.css';

class ExternalLink extends Component {
    render() {
      return (
        <a className={["external-link " + this.props.secondClassName]} href={this.props.href}>{this.props.linkText}</a>
        );
    }
}

export default ExternalLink;