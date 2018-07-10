import React, { Component } from 'react';

import '../styles/Tip.css';

class Tip extends Component {
    displayTip(textArr) {
        let tipText = [];
        if (Array.isArray(textArr)) {
            for (var i=0; i<textArr.length; i++) {
                tipText.push(<span key={i} >{textArr[i]}</span>);
            }
            return <span>{tipText}</span>
        }
        else {
            return <span>{textArr}</span>
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