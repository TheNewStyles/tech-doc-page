import React, { Component } from 'react';

import NavLink from './NavLink';
import '../styles/NavBar.css';

class NavBar extends Component {
    constructor() {
        super();
        let dict = this.populateDictionary();
        this.listItems = dict.map((dict, i) =>
            <NavLink number={dict.index+1} key={dict.key} href={dict.value} text={dict.key} />
        );
    }

    populateDictionary() {
        const hrefs = ["#hello-world", "#introducing-jsx", "#rendering-elements", "#components-and-props", "#state-and-lifecycle", "#handling-events", "#conditional-rendering", "#lists-and-keys", "#forms", "#lifting-state-up", "#composition-vs-inheritance", "#thinking-in-react"];
        const linkText = ["Hello World", "Introducing JSX", "Rendering Elements", "Components and Props", "State and Lifecycle", "Handling Events", "Conditional Rendering", "Lists and Keys", "Forms", "Lifting State Up", "Composition vs Inheritance", "Thinking In React"];
        let dict = [];

        hrefs.forEach(function (href, index) {
            dict.push({
                key: linkText[index],
                value: href,
                index: index
            });
        });

        return dict;
    }

    render() {
        return (
            <nav id="navbar">
                <header>
                    <h4>{this.props.title}</h4>
                </header>
                <ul>
                    {this.listItems}
                </ul>
            </nav>
        );
    }
}

export default NavBar;
