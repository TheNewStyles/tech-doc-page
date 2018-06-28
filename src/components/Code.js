import React, { Component } from 'react';

class Code extends Component {
    render() {
      return (
            // layout / style 
            <div>
                <code>{this.props.code}</code>
            </div>
        );
    }
}

export default Code; 