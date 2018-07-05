import React, { Component } from 'react';

import '../styles/Code.css';

class Code extends Component {
    displayCode(code) {
        let codeText = [];
        if (Array.isArray(code)) {
            for (var i=0; i<code.length; i++) {
                if (typeof code[i] === 'object') {
                codeText.push(<span key={i} >{code[i]}</span>);
                } else {
                    codeText.push(<span key={i} >{code[i]}</span>);
                }
            }

            return <span>{codeText}</span>
        }
        else {
            return <span>{code}</span>
        }
    }

    render() {
      return (
            <figure className="code">
                <figcaption className={this.props.captionClass}>{this.props.codeCaption}</figcaption>
                <pre className="prettyprint linenums:1" >
                    <code contentEditable spellCheck="false" suppressContentEditableWarning="true">
                    {this.displayCode (this.props.code)}
                    </code>
                </pre>
            </figure>
        );
    }
}

export default Code;