import React, { Component } from 'react';

import '../styles/List.css';

class List extends Component {
    displayListItems(listItems) {
        let list = [];
        if (Array.isArray(listItems)) {
            listItems.map((item) =>
                list.push(<li key={item} >{item}</li>)
            );
            return <span>{list}</span>;
        } else {
            return <li key={listItems} >{listItems}</li>;
        }
    }

    render() {
        return (
            <div className="list">
                <p><strong>{this.props.title}</strong></p>
                <ul>
                    {this.displayListItems(this.props.listItems)}
                </ul>
            </div>
        );
    }
}

export default List;