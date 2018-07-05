import React, { Component } from 'react';

import '../styles/App.css';
import NavBar from './NavBar'
import List from './List'
import SectionHeader from './SectionHeader'
import logo from '../images/gif-updates.gif';
import Paragraph from './Paragraph';
import Code from './Code';
import ExternalLink from './ExternalLink';
import Tip from './Tip';

class App extends Component {

    //dedent from https://gist.github.com/zenparsing/5dffde82d9acef19e43c
    dedent(callSite, ...args) {
        function format(str) {
            let size = -1;

            return str.replace(/\n(\s+)/g, (m, m1) => {

                if (size < 0)
                    size = m1.replace(/\t/g, "    ").length;

                return "\n" + m1.slice(Math.min(m1.length, size));
            });
        }

        if (typeof callSite === "string")
            return format(callSite);

        if (typeof callSite === "function")
            return (...args) => format(callSite(...args));

        let output = callSite
            .slice(0, args.length + 1)
            .map((text, i) => (i === 0 ? "" : args[i - 1]) + text)
            .join("");

        return format(output);
    }

  render() {

    return (
      <div id="main">
        <div className="nav-container">
            <NavBar title="MAIN CONCEPTS" />
            {/* <NavBar title="ADVANCED GUIDES" />
            <NavBar title="API REFERENCE" />
            <NavBar title="CONTRIBUTING" />
            <NavBar title="FAQ" /> */}
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
                <Paragraph text={["By default, React DOM " , <a href="https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html">escapes</a> , " any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent " , <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS (cross-site-scripting) </a> , " attacks."]} />
                <SectionHeader title="JSX Represents Objects" />
                <Paragraph text={["Babel compiles JSX down to " , <code>React.createElement()</code> , " calls."]} />
                <Paragraph text="These two examples are identical:" />
                <Code code={this.code[10]} captionClass="no-caption" />
                <Code code={this.code[11]} captionClass="no-caption" />
                <Paragraph text={[ <code> React.createElement() </code> , " performs a few checks to help you write bug-free code but essentially it creates an object like this:"]} />
                <Code code={this.code[12]} captionClass="no-caption" />
                <Paragraph text="These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date." />
                <Paragraph text="We will explore rendering React elements to the DOM in the next section." />
                <Tip title="Tip" text={["We recommend using the " , <a href="http://babeljs.io/docs/editors">“Babel” language definition</a> , " for your editor of choice so that both ES6 and JSX code is properly highlighted. This website uses the " , <a href="https://labs.voronianski.com/oceanic-next-color-scheme/">Oceanic Next</a> , " color scheme which is compatible with it."]} />
            </section>
            <section id="rendering-elements" className="main-section">
                <h1>Rendering Elements</h1>
                <Paragraph text="Elements are the smallest building blocks of React apps." />
                <Code code={this.code[13]} codeCaption="An element describes what you want to see on the screen:" />
                <Paragraph text="Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements." />
                <Tip title="Note:" text={["One might confuse elements with a more widely known concept of “components”. We will introduce components in the " , <a href="#components-and-props" > next section. </a> , " Elements are what components are “made of”, and we encourage you to read this section before jumping ahead."]} />
                <SectionHeader title="Rendering an Element into the DOM" />
                <Code code={this.code[14]} codeCaption="Let’s say there is a <div> somewhere in your HTML file:" />
                <Paragraph text={["We call this a “root” DOM node because everything inside it will be managed by React DOM." , <br></br> , <br></br> , "Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like." , <br></br> , <br></br> , "To render a React element into a root DOM node, pass both to ReactDOM.render():"]} />
                <Code code={this.code[15]} captionClass="no-caption" />
                <ExternalLink href="https://reactjs.org/redirect-to-codepen/rendering-elements/render-an-element" linkText="Try it on CodePen" />
                <Paragraph text="It displays “Hello, world” on the page." />
                <SectionHeader title="Updating the Rendered Element" />
                <Paragraph text={["React elements are " , <a href="https://en.wikipedia.org/wiki/Immutable_object" >immutable.</a> , " Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time."]} />
                <Paragraph text="With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render()." />
                <Code code={this.code[16]} codeCaption="Consider this ticking clock example:" />
                <ExternalLink href="https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element" linkText="Try it on CodePen" />
                <Paragraph text="It calls ReactDOM.render() every second from a setInterval() callback." />
                <Tip title="Note:" text={["In practice, most React apps only call ReactDOM.render() once. In the next sections we will learn how such code gets encapsulated into stateful components. " , <br></br> , <br></br> , " We recommend that you don’t skip topics because they build on each other."]} />
                <SectionHeader title="React Only Updates What’s Necessary" />
                <Paragraph text="React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state." />
                <Paragraph text="You can verify by inspecting the last example with the browser tools:" />
                <Paragraph text="Even though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM." />
                <div>
                    <img src={logo} alt="DOM inspector showing granular updates" />
                </div>
                <Paragraph text="In our experience, thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs." />
            </section>
            <section id="components-and-props" className="main-section">
                <h1>Components and Props</h1>
                <Paragraph text={["Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a " , <a href="https://reactjs.org/docs/react-component.html" >detailed component API reference here.</a>]} />
                <Paragraph text="Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen." />
                <SectionHeader title="Functional and Class Components" />
                <Code codeCaption="The simplest way to define a component is to write a JavaScript function:" code={this.code[17]} />
                <Paragraph text="This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “functional” because they are literally JavaScript functions." />
                <Code codeCaption="You can also use an ES6 class to define a component:" code={this.code[18]} />
                <Paragraph text="The above two components are equivalent from React’s point of view." />
                <Paragraph text="Classes have some additional features that we will discuss in the next sections. Until then, we will use functional components for their conciseness." />
                <SectionHeader title="Rendering a Component" />
                <Code code="const element = <div />;" codeCaption="Previously, we only encountered React elements that represent DOM tags:" />
                <Code code='const element = <Welcome name="Sara" />;' codeCaption="However, elements can also represent user-defined components:" />
                <Paragraph text="When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object “props”." />
                <Code code={this.code[19]} codeCaption="For example, this code renders “Hello, Sara” on the page:" />
                <ExternalLink linkText="Try it on CodePen" href="codepen.io"/>
                <List title="Let’s recap what happens in this example:" listItems={["We call ReactDOM.render() with the <Welcome name='Sara' /> element.", "React calls the Welcome component with {name: 'Sara'} as the props." , "Our Welcome component returns a <h1>Hello, Sara</h1> element as the result." , "React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>."]} />
                <Tip title="Note: Always start component names with a capital letter." text="React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope." />
                <SectionHeader title="Composing Components" />
                <Paragraph text="Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components." />
                <Code code={this.code[20]} codeCaption="For example, we can create an App component that renders Welcome many times:" />
                <ExternalLink linkText="Try it on CodePen" href="codepen.io" />
                <Paragraph text="Typically, new React apps have a single App component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like Button and gradually work your way to the top of the view hierarchy." />
                <SectionHeader title="Extracting Components" />
                <Paragraph text="Don’t be afraid to split components into smaller components." />
                <Code codeCaption="For example, consider this Comment component:" code={this.code[21]} />
                <Paragraph text="It accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website."/>
                <Paragraph text="This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let’s extract a few components from it."/>
                <Code code={this.code[22]} codeCaption="First, we will extract Avatar:" />
                <Paragraph text="The Avatar doesn’t need to know that it is being rendered inside a Comment. This is why we have given its prop a more generic name: user rather than author." />
                <Paragraph text="We recommend naming props from the component’s own point of view rather than the context in which it is being used." />
                <Code code={this.code[23]} codeCaption="We can now simplify Comment a tiny bit:" />
                <Code code={this.code[24]} codeCaption="Next, we will extract a UserInfo component that renders an Avatar next to the user’s name:" />
                <Code code={this.code[25]} codeCaption="This lets us simplify Comment even further:" />
                <Paragraph text="Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component." />
                <SectionHeader title="Props are Read-Only" />
                <Paragraph text="Whether you declare a component as a function or a class, it must never modify its own props. " />
                <Code code={this.code[26]} codeCaption="Consider this sum function:" />
                <Paragraph text="Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs." />
                <Code code={this.code[27]} codeCaption="Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs." />
                <Paragraph text="React is pretty flexible but it has a single strict rule:" />
                <Paragraph text={[<strong>All React components must act like pure functions with respect to their props.</strong>]} />
                <Paragraph text="Of course, application UIs are dynamic and change over time. In the next section, we will introduce a new concept of “state”. State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule." />
           </section>
           <section id="state-and-lifecycle" className="main-section">
                <h1>State and Lifecycle</h1>
                <Paragraph text={["This page introduces the concept of state and lifecycle in a React component. You can find a " , <ExternalLink secondClassName="no-margin" linkText="detailed component API reference here." href="https://reactjs.org/docs/react-component.html" /> ]} />
                <Paragraph text="Consider the ticking clock example from one of the previous sections. In Rendering Elements, we have only learned one way to update the UI. We call ReactDOM.render() to change the rendered output:" />
                <Code code={this.code[28]} />
                <ExternalLink linkText="Try it on CodePen" href="codepen.io"/>
                <Paragraph text="In this section, we will learn how to make the Clock component truly reusable and encapsulated. It will set up its own timer and update itself every second." />
                <Code code={this.code[29]} codeCaption="We can start by encapsulating how the clock looks:" />
                <ExternalLink linkText="Try it on CodePen" href="codepen.io"/>
                <Paragraph text="However, it misses a crucial requirement: the fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock." />
                <Code code={this.code[30]} codeCaption="Ideally we want to write this once and have the Clock update itself:" />
                <Paragraph text={[ "To implement this, we need to add state to the Clock component. " , <br></br> , <br></br> , "State is similar to props, but it is private and fully controlled by the component. " ,  <br></br> , <br></br> , " We mentioned before that components defined as classes have some additional features. Local state is exactly that: a feature available only to classes."]} />
                <SectionHeader title="Converting a Function to a Class" />
                <List title="You can convert a functional component like Clock to a class in five steps:" listItems={["Create an ES6 class, with the same name, that extends React.Component." , "Add a single empty method to it called render()." , "Move the body of the function into the render() method.", "Replace props with this.props in the render() body." , "Delete the remaining empty function declaration."]} />
                <Code code={this.code[31]} captionClass="no-caption" />
                <ExternalLink linkText="Try it on CodePen" href="codepen.io"/>
                <Paragraph text="Clock is now defined as a class rather than a function. The render method will be called each time an update happens, but as long as we render <Clock /> into the same DOM node, only a single instance of the Clock class will be used. This lets us use additional features such as local state and lifecycle hooks." />
                <SectionHeader title="Adding Local State to a Class" />
                <Paragraph text="We will move the date from props to state in three steps:" />
                <Code code={this.code[32]} codeCaption="1. Replace this.props.date with this.state.date in the render() method:" />
                <Code code={this.code[33]} codeCaption="2 Add a class constructor that assigns the initial this.state:" />
                <Code code={this.code[34]} codeCaption="Note how we pass props to the base constructor:" />
                <Paragraph text="Class components should always call the base constructor with props." />
                <Code code={this.code[35]} codeCaption="3. Remove the date prop from the <Clock /> element:" />
                <Paragraph text="We will later add the timer code back to the component itself." />
                <Code code={this.code[36]} codeCaption="The result looks like this:" />
                <ExternalLink linkText="Try it on CodePen" href="https://codepen.io/gaearon/pen/KgQpJd?editors=0010"/>
                <Paragraph text="Next, we’ll make the Clock set up its own timer and update itself every second." />
                <SectionHeader title="Adding Lifecycle Methods to a Class" />
                <Paragraph text="In applications with many components, it’s very important to free up resources taken by the components when they are destroyed." />
                <Paragraph text={["We want to " , <ExternalLink secondClassName="no-margin" linkText="setup a timer " href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval" /> , " whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React."]} />
                <Paragraph text={["We also want to " ,  <ExternalLink secondClassName="no-margin" linkText="clear that timer" href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval" /> , " whenever the DOM produced by the Clock is removed. This is called “unmounting” in React."]} />
                <Code code={this.code[37]} codeCaption="We can declare special methods on the component class to run some code when a component mounts and unmounts:" />
                <Paragraph text="These methods are called “lifecycle hooks”." />
                <Code code={this.code[38]} codeCaption="The componentDidMount() hook runs after the component output has been rendered to the DOM. This is a good place to set up a timer:" />
                <Paragraph text="Note how we save the timer ID right on this." />
                <Paragraph text="While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID)." />
                <Code code={this.code[39]} codeCaption="We will tear down the timer in the componentWillUnmount() lifecycle hook:" />
                <Paragraph text="Finally, we will implement a method called tick() that the Clock component will run every second." />
                <Code code={this.code[40]} codeCaption="It will use this.setState() to schedule updates to the component local state:" />
                <ExternalLink linkText="Try it on Codepen" href="https://codepen.io/gaearon/pen/amqdNA?editors=0010" />
                <Paragraph text="Now the clock ticks every second." />
                <List title="Let’s quickly recap what’s going on and the order in which the methods are called:" listItems={["1. When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.","2. React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output." , "3. When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second." , "4. Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.", "5 If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped."]} />
                <SectionHeader title="Using State Correctly" />
                <Paragraph text="There are three things you should know about setState()." />
                <Paragraph text={<strong>Do Not Modify State Directly</strong>} />
                <Code code={["// Wrong", <br></br> ," this.state.comment = 'Hello';"]} codeCaption="For example, this will not re-render a component:" />
                <Code code={["// Correct", <br></br> ,"this.setState({comment: 'Hello'});"]} codeCaption="Instead, use setState():" />
                <Paragraph text="The only place where you can assign this.state is the constructor." />
                <SectionHeader title="State Updates May Be Asynchronous" />
                <Paragraph text="React may batch multiple setState() calls into a single update for performance." />
                <Paragraph text="Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state." />
                <Code code={this.code[41]} codeCaption="For example, this code may fail to update the counter:" />
                <Code code={this.code[42]} codeCaption="To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:" />
                <Code code={this.code[43]} codeCaption="We used an arrow function above, but it also works with regular functions:" />
                <SectionHeader title="State Updates are Merged" />
                <Paragraph text="When you call setState(), React merges the object you provide into the current state." />
                <Code code={this.code[44]} codeCaption="For example, your state may contain several independent variables:" />
                <Code   codeCaption="Then you can update them independently with separate setState() calls:"
                        code={this.dedent(
                            `
                            componentDidMount() {
                                fetchPosts().then(response => {
                                    this.setState({
                                        posts: response.posts
                                    });
                                });

                                fetchComments().then(response => {
                                    this.setState({
                                        comments: response.comments
                                    });
                                });
                            }
                    `).trim()} />
                <Paragraph text="The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments." />
                <SectionHeader title="The Data Flows Down" />
                <Paragraph text="Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class." />
                <Paragraph text="This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it." />
                <Code
                    code={this.dedent(`<h2>It is {this.state.date.toLocaleTimeString()}.</h2>`)}
                    codeCaption="A component may choose to pass its state down as props to its child components:"
                />
                <Code
                    code={this.dedent(`<FormattedDate date={this.state.date} />`)}
                    codeCaption="This also works for user-defined components:"
                />
                <Paragraph text="The FormattedDate component would receive the date in its props and wouldn’t know "/>
                <Code
                    code={this.dedent(`
                    function FormattedDate(props) {
                        return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
                    }
                    `)}
                    codeCaption="whether it came from the Clock’s state, from the Clock’s props, or was typed by hand:"
                />
                <ExternalLink linkText="Try it on CodePen" href="https://codepen.io/gaearon/pen/zKRqNB?editors=0010" />
                <Paragraph text="This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree." />
                <Paragraph text="If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down." />
                <Code
                    code={this.dedent(`
                    function App() {
                        return (
                                <div>
                                    <Clock />
                                    <Clock />
                                    <Clock />
                                </div>
                            );
                        }

                        ReactDOM.render(
                            <App />,
                            document.getElementById('root')
                        );`)}
                    codeCaption="To show that all components are truly isolated, we can create an App component that renders three <Clock>s:"
                />
                <ExternalLink linkText="Try it on CodePen" href="https://codepen.io/gaearon/pen/vXdGmd?editors=0010" />
                <Paragraph text="Each Clock sets up its own timer and updates independently." />
                <Paragraph text="In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa." />
           </section>
           <section id="handling-events" className="main-section">
               <h1>Handling Events</h1>
               <List title="Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:"
                     listItems={["React events are named using camelCase, rather than lowercase.", "With JSX you pass a function as the event handler, rather than a string."]}
               />
               <Code
                    code={this.dedent(`
                    <button onclick="activateLasers()">
                        Activate Lasers
                    </button>
                    `)}
                    codeCaption="For example, the HTML:"
                />
                <Code
                    code={this.dedent(`
                    <button onClick={activateLasers}>
                        Activate Lasers
                    </button>
                    `)}
                    codeCaption="is slightly different in React:"
                />
                <Code
                    code={this.dedent(`
                    <a href="#" onclick="console.log('The link was clicked.'); return false">
                        Click me
                    </a>
                    `)}
                    codeCaption="Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:"
                />
                <Code
                    code={this.dedent(`
                    function ActionLink() {
                        function handleClick(e) {
                            e.preventDefault();
                            console.log('The link was clicked.');
                        }

                        return (
                            <a href="#" onClick={handleClick}>
                            Click me
                            </a>
                        );
                    }
                    `)}
                    codeCaption="In React, this could instead be:"
                />
                <Paragraph text="Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility. See the SyntheticEvent reference guide to learn more." />
                <Paragraph text="When using React you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered."  />
                <Paragraph text="When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:" />
                <Code
                    captionClass="no-caption"
                    code={this.dedent(
                    `
                    class Toggle extends React.Component {
                        constructor(props) {
                            super(props);
                            this.state = {isToggleOn: true};

                            // This binding is necessary to make 'this' work in the callback
                            this.handleClick = this.handleClick.bind(this);
                        }

                        handleClick() {
                            this.setState(prevState => ({
                            isToggleOn: !prevState.isToggleOn
                            }));
                        }

                        render() {
                            return (
                            <button onClick={this.handleClick}>
                                {this.state.isToggleOn ? 'ON' : 'OFF'}
                            </button>
                            );
                        }
                    }

                    ReactDOM.render(
                        <Toggle />,
                        document.getElementById('root')
                    );
                    `)}
                />
                <ExternalLink linkText="Try it on CodePen" href="https://codepen.io/gaearon/pen/vXdGmd?editors=0010" />
                <Paragraph text="You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called." />
                <Paragraph text={["This is not React-specific behavior; it is a part of " , <ExternalLink secondClassName="no-margin" linkText="how JavaScript functions work" href="https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/" /> , " Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method."]} />
                <Paragraph text={["If calling bind annoys you, there are two ways you can get around this. If you are using the experimental " , <ExternalLink secondClassName="no-margin" linkText="public class fields syntax," href="https://babeljs.io/docs/en/babel-plugin-transform-class-properties/" /> , " you can use class fields to correctly bind callbacks:"]} />
                <Code code={this.dedent(`
                    class LoggingButton extends React.Component {
                    // This syntax ensures "this" is bound within handleClick.
                    // Warning: this is *experimental* syntax.
                    handleClick = () => {
                        console.log('this is:', this);
                    }

                    render() {
                        return (
                        <button onClick={this.handleClick}>
                            Click me
                        </button>
                        );
                    }
                    })`)}
                captionClass="no-caption" />
                <Paragraph text="This syntax is enabled by default in Create React App." />
                <Code
                    code={this.dedent(`
                    class LoggingButton extends React.Component {
                        handleClick() {
                            console.log('this is:', this);
                        }

                        render() {
                            // This syntax ensures "this" is bound within handleClick
                            return (
                            <button onClick={(e) => this.handleClick(e)}>
                                Click me
                            </button>
                            );
                        }
                    }
                    `)}
                    codeCaption="If you aren’t using class fields syntax, you can use an arrow function in the callback:"
                />
                <Paragraph text="The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem." />
                <SectionHeader title="Passing Arguments to Event Handlers" />
                <Code
                    code={this.dedent(`
                    <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
                    <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
                    `)}
                    codeCaption="Inside a loop it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:"
                />
                <Paragraph text="The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively. In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded." />
           </section>
           <section id="conditional-rendering" className="main-section">
                <h1>Conditional Rendering</h1>
                <Paragraph text="In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application." />
                <Paragraph text="Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them." />
                <Code
                    code={this.dedent(`
                    function UserGreeting(props) {
                        return <h1>Welcome back!</h1>;
                    }

                    function GuestGreeting(props) {
                        return <h1>Please sign up.</h1>;
                    }
                    `)}
                    codeCaption="Consider these two components:"
                />
                <Code
                    code={this.dedent(`
                    function Greeting(props) {
                        const isLoggedIn = props.isLoggedIn;
                        if (isLoggedIn) {
                            return <UserGreeting />;
                        }
                        return <GuestGreeting />;
                    }

                    ReactDOM.render(
                        // Try changing to isLoggedIn={true}:
                        <Greeting isLoggedIn={false} />,
                        document.getElementById('root')
                    );
                    `)}
                    codeCaption="We’ll create a Greeting component that displays either of these components depending on whether a user is logged in:"
                />
                <ExternalLink linkText="Try it on CodePen" href="https://codepen.io/gaearon/pen/vXdGmd?editors=0010" />
                <Paragraph text="This example renders a different greeting depending on the value of isLoggedIn prop." />
                <SectionHeader title="Element Variables" />
                <Paragraph text="You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change." />
                <Code
                    code={this.dedent(`
                    function LoginButton(props) {
                        return (
                            <button onClick={props.onClick}>
                            Login
                            </button>
                        );
                    }

                    function LogoutButton(props) {
                        return (
                            <button onClick={props.onClick}>
                            Logout
                            </button>
                        );
                    }
                    `)}
                    codeCaption="Consider these two new components representing Logout and Login buttons:"
                />
                <Paragraph text="In the example below, we will create a stateful component called LoginControl." />
                <Code
                    code={this.dedent(`
                    class LoginControl extends React.Component {
                        constructor(props) {
                            super(props);
                            this.handleLoginClick = this.handleLoginClick.bind(this);
                            this.handleLogoutClick = this.handleLogoutClick.bind(this);
                            this.state = {isLoggedIn: false};
                        }

                        handleLoginClick() {
                            this.setState({isLoggedIn: true});
                        }

                        handleLogoutClick() {
                            this.setState({isLoggedIn: false});
                        }

                        render() {
                            const isLoggedIn = this.state.isLoggedIn;
                            let button;

                            if (isLoggedIn) {
                            button = <LogoutButton onClick={this.handleLogoutClick} />;
                            } else {
                            button = <LoginButton onClick={this.handleLoginClick} />
                            }

                            return (
                            <div>
                                <Greeting isLoggedIn={isLoggedIn} />
                                {button}
                            </div>
                            );
                        }
                    }

                    ReactDOM.render(
                        <LoginControl />,
                        document.getElementById('root')
                    );
                    `)}
                    codeCaption="It will render either <LoginButton /> or <LogoutButton /> depending on its current state. It will also render a <Greeting /> from the previous example:"
                />
                <ExternalLink linkText="Try it on CodePen" href="https://codepen.io/gaearon/pen/vXdGmd?editors=0010" />
                <Paragraph text="While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below." />
                <SectionHeader title="Inline If with Logical && Operator"  />
                <Code
                    code={this.dedent(`
                    function Mailbox(props) {
                        const unreadMessages = props.unreadMessages;
                        return (
                            <div>
                            <h1>Hello!</h1>
                            {unreadMessages.length > 0 &&
                                <h2>
                                You have {unreadMessages.length} unread messages.
                                </h2>
                            }
                            </div>
                        );
                    }

                    const messages = ['React', 'Re: React', 'Re:Re: React'];

                    ReactDOM.render(
                        <Mailbox unreadMessages={messages} />,
                        document.getElementById('root')
                    );
                    `)}
                    codeCaption="You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:"
                />
                <ExternalLink linkText="Try it on CodePen" href="https://codepen.io/gaearon/pen/vXdGmd?editors=0010" />
                <Paragraph text="It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false." />
                <Paragraph text="Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it." />
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
  `const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );`,
  `const title = response.potentiallyMaliciousInput;
  // This is safe:
  const element = <h1>{title}</h1>;`,
  `const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );`,
  `// Note: this structure is simplified
  const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };`,
  `const element = <h1>Hello, world</h1>;`,
  `<div id="root"></div>`,
  `const element = <h1>Hello, world</h1>;
  ReactDOM.render(element, document.getElementById('root'));`,
  `function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }

  setInterval(tick, 1000);`,
  `function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
  `class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }`,
  `function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );`,
  `function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );`,
  `function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }`,
  `function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />

    );
  }`,
  `function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar user={props.author} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }`,
  `function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }`,
  `function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }`, 
  `function sum(a, b) {
    return a + b;
  }`,
  `function withdraw(account, amount) {
    account.total -= amount;
  }`,
  `function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }

  setInterval(tick, 1000);`,
  `function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }

  setInterval(tick, 1000);`,
  `ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );`,
  `class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }`,
  `class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }`,
  `class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }`,
`constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }`,
  `ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );`,
  `class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );`,
  `class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }`,
  `  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }`,
  `  componentWillUnmount() {
    clearInterval(this.timerID);
  }`,
  `class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );`,
  `// Wrong
  this.setState({
    counter: this.state.counter + this.props.increment,
  });
  `,
  `// Correct
  this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
  }));`,
  `// Correct
  this.setState(function(prevState, props) {
    return {
      counter: prevState.counter + props.increment
    };
  });`,
  ` constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }`
];


}

export default App;
