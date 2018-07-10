import React, { Component } from 'react';


class MainSectionHeader extends Component {
    render() {
      return (
        <header>
            <h1 id={this.props.id}>
                {this.props.title}
            </h1>
        </header>
        );
    }
}

export default MainSectionHeader;