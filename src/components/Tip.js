import React, { Component } from 'react';

import '../styles/Tip.css';

class Tip extends Component {    
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Tip; 