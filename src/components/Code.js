import React, { Component } from 'react';

class Code extends Component {
    render() {
      return (
            // layout / style 
            <figure>
            <figcaption>{this.props.codeCaption}</figcaption>
                <pre>
                    <code contentEditable spellCheck="false">
                        {this.props.code}
                    </code>
                </pre>
            </figure>
        );
    }
}

export default Code; 