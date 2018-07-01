import React, { Component } from 'react';
import NavBar from './NavBar'
import List from './List'
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
        <NavBar title="React Documentation" />        
        <main id="main-doc">
            <section id="hello-world" className="main-section">
                <SectionHeader title="React - Hello World" />
                <Paragraph text="This documentation was created from https://reactjs.org/docs" />
                <Code codeCaption="The smallest React example looks like this:" code={this.code[0]} />
                <Paragraph text="It displays a heading saying “Hello, world!” on the page." />
                <ExternalLink link="https://codepen.io/pen?&editors=0010" linkText="Try it on CodePen" />
                <Paragraph text="Click the link above to open an online editor. Feel free to make some changes, and see how they affect the output. Most pages in this guide will have editable examples like this one." />
            </section>
            <section id="how-to-read" className="main-section">
                <SectionHeader title="How to Read This Guide" />
                <Paragraph text="In this guide, we will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces" />
                <Tip title="Tip" text={["This guide is designed for people who prefer", <strong> learning concepts step by step. </strong> , "If you prefer to learn by doing, check out our practical tutorial. You might find this guide and the tutorial complementary to each other."]} />
                <Paragraph text="This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen." />
            </section>    
            <section>
                <List listItems={["one", "two", "three"]} /> 
                <List listItems={["chode", "george", "roscoe"]} /> 
                <Code codeCaption="Code Snippet Title" code={this.code[0]} />
                <Code codeCaption="My new code section" code={this.code[1]} />
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
`public static void MyClassInitialize(TestContext testContext)
{
  ITCommon.UserManagement.AutoRefreshAuthorizationCache = false;

  _classBucket = new ITCommon.TestBucket();

  _carrier = ITCommon.CarrierManagement.SetupLotsaTruckingCarrier();
  _classBucket.TakeOwnershipOfCarrier(_carrier);
} `
];


}

export default App;
