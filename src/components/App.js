import React, { Component } from 'react';
import NavBar from './NavBar'
import List from './List'
import SectionHeader from './SectionHeader'

// import logo from '../images/logo.svg';
import '../styles/App.css';
import Paragraph from './Paragraph';
import Code from './Code';

class App extends Component {
  render() {

    return (
      <div>          
        <NavBar title="React Documentation" />        
        <main id="main-doc">
            <section id="hello-world" className="main-section">
                <SectionHeader title="React - Hello World" />
                <Code codeCaption="The smallest React example looks like this:" code={this.code[0]} />
                <Paragraph text="It displays a heading saying “Hello, world!” on the page." />
            </section>
            <section id="" className="main-section">
                <SectionHeader title="Next Chaper - test" />
                <Paragraph text="This is something meaninful about ES6." />
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
