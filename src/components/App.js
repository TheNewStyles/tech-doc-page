import React, { Component } from 'react';
import NavBar from './NavBar'
// import List from './List'
import SectionHeader from './SectionHeader'

// import logo from '../images/logo.svg';
import '../styles/App.css';
import Paragraph from './Paragraph';
import Code from './Code';
import ExternalLink from './ExternalLink';
import Tip from './Tip';

class App extends Component {
  render() {

    return (
      <div id="main">
        <div className="nav-container">
            <NavBar title="MAIN CONCEPTS" />
            <NavBar title="ADVANCED GUIDES" />
            <NavBar title="API REFERENCE" />
            <NavBar title="CONTRIBUTING" />
            <NavBar title="FAQ" />
        </div>
        <main id="main-doc">
            <section id="hello-world" className="main-section">
                <header>
                    <h1 id="react-doc-title">React Documentation</h1>
                    <Paragraph text="This documentation was created from https://reactjs.org/docs" />
                </header>
                <SectionHeader id="hw-header" title="Hello World" />
                <Code codeCaption="The smallest React example looks like this:" code={this.code[0]} />
                <Paragraph text="It displays a heading saying “Hello, world!” on the page." />
                <ExternalLink link="https://codepen.io/pen?&editors=0010" linkText="Try it on CodePen" />
                <Paragraph text="Click the link above to open an online editor. Feel free to make some changes, and see how they affect the output. Most pages in this guide will have editable examples like this one." />
                <article id="how-to-read">
                    <SectionHeader title="How to Read This Guide" />
                    <Paragraph text="In this guide, we will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces" />
                    <Tip title="Tip" text={["This guide is designed for people who prefer", <strong> learning concepts step by step. </strong> , "If you prefer to learn by doing, check out our practical tutorial. You might find this guide and the tutorial complementary to each other."]} />
                    <Paragraph text="This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen." />
                    <Paragraph text={["Every chapter in this guide builds on the knowledge introduced in earlier chapters. ", <strong> You can learn most of React by reading the “Main Concepts” guide chapters in the order they appear in the sidebar. </strong>, "For example, “Introducing JSX” is the next chapter after this one."]} />
                </article>
                <article>
                    <SectionHeader title="Knowledge Level Assumptions" />
                    <Paragraph text={["React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language.", <strong> If you don’t feel very confident, we recommend going through a JavaScript tutorial to check your knowledge level </strong> , "and enable you to follow along this guide without getting lost. It might take you between 30 minutes and an hour, but as a result you won’t have to feel like you’re learning both React and JavaScript at the same time."]} />
                    <Tip title="Note" text={["This guide occasionally uses some of the newer JavaScript syntax in the examples. If you haven’t worked with JavaScript in the last few years, " , <a href="https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c">these three points</a> ," should get you most of the way."]} />
                </article>
                <article>
                    <SectionHeader title="Let's Get Started!" />
                    <Paragraph text={["Keep scrolling down, and you’ll find the ", <a href="#introducing-jsx">link to the next chapter</a> ," of this guide right before the website footer."]} />
                </article>
            </section>
            <section id="introducing-jsx" className="main-section">
                <h1>Introducing JSX</h1>
                <Code codeCaption="Consider this variable declaration:" code={this.code[1]} />  
                <Paragraph text="This funny tag syntax is neither a string nor HTML." /> 
                <Paragraph text="It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript." />
                <Paragraph text={["JSX produces React “elements”. We will explore rendering them to the DOM in the ", <a href="#rendering-elements">next section.</a>  ," Below, you can find the basics of JSX necessary to get you started."]} />
                <SectionHeader title="Why JSX?" />
                <Paragraph text="React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display." />
                <Paragraph text={["Instead of artificially separating technologies by putting markup and logic in separate files, React " , <a href="https://en.wikipedia.org/wiki/Separation_of_concerns">separates concerns</a>  , " with loosely coupled units called “components” that contain both. We will come back to components in a " , <a href="#components-and-props">further section</a>  , " but if you’re not yet comfortable putting markup in JS, " , <a href="https://www.youtube.com/watch?v=x7cQ3mrcKaY">this talk</a>  , " might convince you otherwise."]} />
                <Paragraph text={["React " , <a href="#react-withou-jsx">doesn't require</a>  , " using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages."]} />
                <Paragraph text="With that out of the way, let’s get started!" />
                <SectionHeader title="Embedding Expressions in JSX" />
                <Paragraph text={["In the example below, we declare a variable called " , <code> name </code> , " and then use it inside JSX by wrapping it in curly braces:"]} />
                <Code code={this.code[2]} captionClass="no-caption"/>
                <Paragraph text={["You can put any valid " , <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions">JavaScript expression</a> , " inside the curly braces in JSX. For example, " , <code>2 + 2, user.firstName</code> , " , or " , <code>formatName(user)</code> , " are all valid JavaScript expressions."]} />
                <Paragraph text={["In the example below, we embed the result of calling a JavaScript function, " , <code>formatName(user)</code> , " into an " , <code>h1</code> , " element"]} />
                <Code code={this.code[3]} captionClass="no-caption" />
                <ExternalLink link="https://codepen.io/pen?&editors=0010" linkText="Try it on CodePen" />
                <Paragraph text={["We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of " , <a href="https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi">automatic semicolon insertion</a> ]} />
                <SectionHeader title="JSX is an Expression Too" />
                <Paragraph text="After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects." />
                <Paragraph text="This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:" />
                <Code code={this.code[4]} captionClass="no-caption" />
                <SectionHeader title="Specifying Attributes with JSX" />
                <Paragraph text="You may use quotes to specify string literals as attributes:" />
                <Code code={this.code[5]} captionClass="no-caption" />
                <Paragraph text="You may also use curly braces to embed a JavaScript expression in an attribute:" />
                <Code code={this.code[6]} captionClass="no-caption" />
                <Paragraph text="Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute." />
                <Tip title="Warning" text={["Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names." , <br/> , <br/> , " For example, class becomes " , <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className">className</a> , " in JSX, and tabindex becomes " , <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex">tabIndex</a> ]} />
                <SectionHeader title="Specifying Children with JSX" />
                <Paragraph text="If a tag is empty, you may close it immediately with />, like XML:" />
                <Code code={this.code[7]} captionClass="no-caption" />
                <Paragraph text="JSX tags may contain children:" />
                <Code code={this.code[8]} captionClass="no-caption" />
                <SectionHeader title="JSX Prevents Injection Attacks" />
                <Paragraph text="It is safe to embed user input in JSX:" />
                <Code code={this.code[9]} captionClass="no-caption" />
                <Paragraph text={["By default, React DOM " , , " any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent " , , " attacks."]} />
            </section>
        </main>
      </div>
    );
  }

code = [
`ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);`,
`const element = <h1>Hello, world!</h1>;`,
`const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);`,
`function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

  ReactDOM.render(
    element,
    document.getElementById('root')
  );`,
  `function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }`,
  `const element = <div tabIndex="0"></div>;`,
  `const element = <img src={user.avatarUrl}></img>;`,
  `const element = <img src={user.avatarUrl} />;`,
  `const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );`,
  `const title = response.potentiallyMaliciousInput;
  // This is safe:
  const element = <h1>{title}</h1>;`
];


}

export default App;
