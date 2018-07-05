import React, { Component } from 'react';

import '../styles/Paragraph.css';

class Paragraph extends Component {
    displayText(textArr) {
        let pText = [];
        if (Array.isArray(textArr)) {
            for (var i=0; i<textArr.length; i++) {
                if (typeof textArr[i] === 'object') {
                pText.push(<span key={i} >{textArr[i]}</span>);
                } else {
                    pText.push(<span key={i} >{textArr[i]}</span>);
                }
            }

            return <span>{pText}</span>
        }
        else {
            return <span>{textArr}</span>
        }
    }

    render() {
      return (
        <p>
            {this.displayText(this.props.text)}
        </p>
        );
    }
}

export default Paragraph;