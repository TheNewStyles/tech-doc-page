import React, { Component } from 'react';

class List extends Component {    
    constructor(props) {
        super(props);
        const listItems = this.props.listItems; 
        this.list = listItems.map((listItems) =>
            <li>{listItems}</li>
        );
    }

    render() {
        return (
            <ul>
                {this.list}
            </ul>
        );
    }
}

export default List; 