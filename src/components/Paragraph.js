import React, { Component } from 'react';

import '../styles/Paragraph.css';

class Paragraph extends Component {
    render() {
      return (
        <p>
            {this.props.text}
        </p>
        );
    }
}

export default Paragraph; 