---
layout: post
title:  "Method Chaining Pattern with JavaScript"
date:   2017-11-01
keywords: "javascript, design patterns"
categories: [Design Patterns]
tags: [Javascript, Design Patterns]
icon: icon-javascript
      
---


Simple implementation of Method Chaining Pattern with Javascript 
```
const actions = function(hour) {
  let hourOfAction = hour || '12:00';

  return {
    sleep: function(hour = hourOfAction) {
      console.log(`Sleeping at ${hour}!`);
      return this;
    },
    eat: function(hour = hourOfAction) {
      console.log(`Eating at ${hour}!`);
      return this;
    },
    code: function(hour = hourOfAction) {
      console.log(`Coding at ${hour}!`);
      return this;
    }
  };
};

actions()
  .sleep('20:00')
  .eat()
  .code('every time');
```

Result:
```
Sleeping at 20:00!
Eating at 12:00!
Coding at every time!
``` 