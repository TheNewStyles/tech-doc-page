import React, { Component } from 'react';

import '../styles/Code.css';

class Code extends Component {
    render() {
      return (
            // layout / style 
            <figure>
            <figcaption>{this.props.codeCaption}</figcaption>
                <pre className="prettyprint linenums:1" >
                    <code contentEditable spellCheck="false" suppressContentEditableWarning="true">
                        {this.props.code}
                    </code>
                </pre>
            </figure>
        );
    }
}

export default Code; 