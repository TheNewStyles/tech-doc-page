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
        <NavBar title="MAIN CONCEPTS" />        
        <main id="main-doc">
            <section id="hello-world" className="main-section">
                <header>
                    <h1>React Documentation</h1>
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
            </section>         
        </main>        
      </div>
    );
  }

       
code = [
`ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
`,
`const element = <h1>Hello, world!</h1>;`
];


}

export default App;
