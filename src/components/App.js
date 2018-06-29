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
        <NavBar />        
        <main id="main-doc">
          <section id="" className="main-section">
              <SectionHeader title="ES6" />
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
`public static void MyClassInitialize(TestContext testContext)
{
  ITCommon.UserManagement.AutoRefreshAuthorizationCache = false;

  _classBucket = new ITCommon.TestBucket();

  _carrier = ITCommon.CarrierManagement.SetupLotsaTruckingCarrier();
  _classBucket.TakeOwnershipOfCarrier(_carrier);
} `,
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
