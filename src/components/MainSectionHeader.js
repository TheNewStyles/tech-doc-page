import React, { Component } from 'react';


class MainSectionHeader extends Component {
    render() {
      return (
        <header>
            <h1>
                {this.props.title}
            </h1>
        </header>
        );
    }
}

export default MainSectionHeader;