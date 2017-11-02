---
layout: post
title:  "React 16 Lifecycle"
date:   2017-11-01
keywords: "react, lifecycle"
categories: [React]
tags: [React, React Lifecycle]
icon: icon-react
      
---

This code show all flux of React v16 lifecycle

```javascript
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reRendered: 'false',
      someProps: 'React Lifecycle',
      hasError: false,
      lol: { lol: `I'm working` }
    };
    console.log(`${new Date().getMilliseconds()} - * ComponentA Constructing`);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(`${new Date().getMilliseconds()} - * ComponentA Will Update`);
  }

  componentWillMount() {
    console.log(`${new Date().getMilliseconds()} - * ComponentA Will Mount`);
  }

  componentWillUnmount() {
    console.log(`${new Date().getMilliseconds()} - * ComponentA Will Umount`);
  }

  makeError() {
    this.setState({ lol: null });
  }

  render() {
    console.log(`${new Date().getMilliseconds()} - * ComponentA Rendering`);
    if (this.state.hasError) {
      return <div>Sorry</div>;
    } else {
      return (
        <div>
          <ComponentB someProps={this.state.lol.lol} />
          <button onClick={this.makeError.bind(this)}>Make error</button>
        </div>
      );
    }
  }

  componentDidMount() {
    console.log(`${new Date().getMilliseconds()} - * ComponentA Did Mount`);
    console.log('---- Changing state in component A ----');
    this.setState({ reRendered: 'true' });
  }

  componentDidCatch(error, errorInfo) {
    console.log(`${new Date().getMilliseconds()} - * ComponentA Did Catch`);
    this.setState({ hasError: true });
  }

  componentDidUpdate() {
    console.log(`${new Date().getMilliseconds()} - * ComponentA Did Update`);
  }
}

class ComponentB extends Component {
  constructor(props) {
    super(props);

    console.log(
      `${new Date().getMilliseconds()} - > * ComponentB Constructing`
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      `${new Date().getMilliseconds()} - > * ComponentB Will Receive Props`
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(`${new Date().getMilliseconds()} - > * ComponentB Will Update`);
  }

  componentWillMount() {
    console.log(`${new Date().getMilliseconds()} - > * ComponentB Will Mount`);
  }

  componentWillUnmount() {
    console.log(`${new Date().getMilliseconds()} - > * ComponentB Will Umount`);
  }

  render() {
    console.log(`${new Date().getMilliseconds()} - > * ComponentB Rendering`);
    return (
      <b>
        {this.props.someProps} <br />
        <small>See in your console</small>
      </b>
    );
  }

  componentDidMount() {
    console.log(`${new Date().getMilliseconds()} - > * ComponentB Did Mount`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `${new Date().getMilliseconds()} - > * ComponentB Should Update : Returning true`
    );
    return true;
  }

  componentDidUpdate() {
    console.log(`${new Date().getMilliseconds()} - > * ComponentB Did Update`);
  }

  componentDidCatch(error, errorInfo) {
    console.log(`${new Date().getMilliseconds()} - > * ComponentB Did Catch`);
  }
}

export default App;
```

Result:

```bash
App.js:12 211 - * ComponentA Constructing
App.js:20 215 - * ComponentA Will Mount
App.js:32 215 - * ComponentA Rendering
App.js:65 219 - > * ComponentB Constructing
App.js:81 219 - > * ComponentB Will Mount
App.js:89 219 - > * ComponentB Rendering
App.js:99 223 - > * ComponentB Did Mount
App.js:46 223 - * ComponentA Did Mount
App.js:47 ---- Changing state in component A ----
App.js:16 223 - * ComponentA Will Update
App.js:32 223 - * ComponentA Rendering
App.js:71 223 - > * ComponentB Will Receive Props
App.js:103 223- > * ComponentB Should Update : Returning true
App.js:77 223 - > * ComponentB Will Update
App.js:89 223 - > * ComponentB Rendering
App.js:110 228- > * ComponentB Did Update
App.js:57 228 - * ComponentA Did Update
App.js:16 642 - * ComponentA Will Update
App.js:32 642 - * ComponentA Rendering
App.js:24 650 - * ComponentA Will Umount
App.js:85 654 - > * ComponentB Will Umount
```