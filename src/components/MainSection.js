import React, { Component } from 'react';


class MainSection extends Component {
    render() {
        return (
            <section id={this.props.id} className={this.props.className}>
                {this.props.children}
            </section>
        );
    }
}

export default MainSection;