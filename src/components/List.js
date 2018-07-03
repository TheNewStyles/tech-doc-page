import React, { Component } from 'react';

import '../styles/List.css';

class List extends Component {
    constructor(props) {
        super(props);
        const listItems = this.props.listItems;
        this.list = listItems.map((listItems) =>
            <li key={listItems} >{listItems}</li>
        );
    }

    render() {
        return (
            <ul>
            <lh><strong>{this.props.title}</strong></lh>
                {this.list}
            </ul>
        );
    }
}

export default List;