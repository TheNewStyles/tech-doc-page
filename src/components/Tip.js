import React, { Component } from 'react';

import '../styles/Tip.css';

class Tip extends Component {
    displayTip(textArr) {
        let tipText = [];
        if (Array.isArray(textArr)) {
            for (var i=0; i<textArr.length; i++) {
                if (typeof textArr[i] === 'object') {
                tipText.push(<span key={i} >{textArr[i]}</span>);
                } else {
                    tipText.push(<span key={i} >{textArr[i]}</span>);
                }
            }

            return <p>{tipText}</p>
        }
        else {
            return <p>{textArr}</p>
        }
    }

    render() {
        return (
            <div className="tip">
                <h4>{this.props.title}</h4>
                {this.displayTip(this.props.text)}
            </div>
        );
    }
}

export default Tip;