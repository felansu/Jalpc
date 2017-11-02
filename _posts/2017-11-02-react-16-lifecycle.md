---
layout: post
title:  "React 16 Lifecycle - Now with componentDidCatch"
date:   2017-11-02
keywords: "react, lifecycle, componentDidCatch"
categories: [React]
tags: [React, React Lifecycle, componentDidCatch]
icon: icon-reactjs
      
---

This code show all flux of React v16 lifecycle now with componentDidCatch

```javascript
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.log(
      `${new Date().getMilliseconds()} - * Component did catch working`
    );
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reRendered: 'false'
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

  render() {
    console.log(`${new Date().getMilliseconds()} - * ComponentA Rendering`);
    return <div>I'm Component A</div>;
  }

  componentDidMount() {
    console.log(`${new Date().getMilliseconds()} - * ComponentA Did Mount`);
    console.log('---- Changing state in component A ----');
    this.setState({ reRendered: 'true' });
  }

  componentDidUpdate() {
    console.log(`${new Date().getMilliseconds()} - * ComponentA Did Update`);
  }
}

class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
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

  makeError() {
    console.log(
      `${new Date().getMilliseconds()} - > * ComponentB Set hasError to True`
    );
    this.setState({ hasError: true });
  }

  render() {
    console.log(`${new Date().getMilliseconds()} - > * ComponentB Rendering`);
    if (this.state.hasError) {
      throw new Error('I crashed!');
    }
    return (
      <b>
        {this.props.someProps} <br />
        <small>See in your console</small>
        <br />
        <button onClick={this.makeError.bind(this)}>
          Make an error here !
        </button>
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
}

class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentB someProps={'Im a prop of Component B'} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;

```

Awesome result:

```bash
App.js:34 212 - * ComponentA Constructing
App.js:42 213 - * ComponentA Will Mount
App.js:50 213 - * ComponentA Rendering
App.js:69 214 - > * ComponentB Constructing
App.js:87 215 - > * ComponentB Will Mount
App.js:102 215 - > * ComponentB Rendering
App.js:55 217 - * ComponentA Did Mount
App.js:56 ---- Changing state in component A ----
App.js:117 217 - > * ComponentB Did Mount
App.js:38 218 - * ComponentA Will Update
App.js:50 219 - * ComponentA Rendering
App.js:61 220 - * ComponentA Did Update
registerServiceWorker.js:64 Content is cached for offline use.
App.js:95 473 - > * ComponentB Set hasError to True
App.js:121 473 - > * ComponentB Should Update : Returning true
App.js:83 473 - > * ComponentB Will Update
App.js:102 473 - > * ComponentB Rendering
react-dom.production.min.js:187 Error: I crashed!
    at t.value (App.js:104)
    at s (react-dom.production.min.js:147)
    at beginWork (react-dom.production.min.js:150)
    at a (react-dom.production.min.js:182)
    at s (react-dom.production.min.js:183)
    at c (react-dom.production.min.js:184)
    at batchedUpdates (react-dom.production.min.js:190)
    at w (react-dom.production.min.js:41)
    at C (react-dom.production.min.js:41)
    at Object.batchedUpdates (react-dom.production.min.js:42)
p @ react-dom.production.min.js:187
App.js:91 474 - > * ComponentB Will Umount
App.js:14 475 - * Component did catch working
App.js:17 Error: I crashed!
    at t.value (App.js:104)
    at s (react-dom.production.min.js:147)
    at beginWork (react-dom.production.min.js:150)
    at a (react-dom.production.min.js:182)
    at s (react-dom.production.min.js:183)
    at c (react-dom.production.min.js:184)
    at batchedUpdates (react-dom.production.min.js:190)
    at w (react-dom.production.min.js:41)
    at C (react-dom.production.min.js:41)
    at Object.batchedUpdates (react-dom.production.min.js:42) Object
```

Demo:

![Demo](/static/assets/img/posts/20171102/ComponentdidCatch.gif)