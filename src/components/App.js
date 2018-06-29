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
    this.code = 
`public static void MyClassInitialize(TestContext testContext)
{
  ITCommon.UserManagement.AutoRefreshAuthorizationCache = false;

  _classBucket = new ITCommon.TestBucket();

  _carrier = ITCommon.CarrierManagement.SetupLotsaTruckingCarrier();
  _classBucket.TakeOwnershipOfCarrier(_carrier);
}`
    return (
      <div>          
        <NavBar />        
        <main id="main-doc">
          <section id="" className="main-section">
              <SectionHeader title="ES6" />
              <Paragraph text="This is something meaninful about ES6." />
              <List /> {/* how to create a ul li's dynamically   */}
              <Code codeCaption="Code Snippet Title" code={this.code} />
          </section>    
        </main>        
      </div>
    );
  }
}

export default App;
