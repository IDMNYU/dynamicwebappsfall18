## Day 8

* Learning Log Presentation: Jeremy

* INTRO TO NODE!

    * What is node?
    
    * Writing "Hello World"
    
    * Working with modules
    
    
* Exercise: 

Create a module for each of the following:

* Set Difference: Given two arrays of strings, produce a single array of items that are in one or the other but not both

* Set Intersection: Given two arrays of strings, produce a single array of unique items that are in both sets. 

* Create a file called app.js and include the following code. Feel free to change the items in the arrays if you like:


```
var setDifference = require('./set-difference');

var setIntersection = require('./set-intersection');

var set1 = ['dogs', 'cats', 'red', 'bananas', 'code', 'movies'];

var set2 = ['blue', 'horses', 'dogs', 'code', 'rain'];

var difference = setDifference(set1, set2);

var intersection = setIntersection(set1, set2);

//should print an array with cats, red, bananas, movies, blue, rain as elements
console.log(difference);

//should print an array with dogs and code as elements
console.log(intersection);
```

### Homework:

* For Tuesday: Set up a dummy Twitter account. You will have to set it up with a different email address than your main Twitter account if you already have one. We are going to use this as our Twitterbot, and each account will have its own unique API key.

* Read [The Only node.js Introduction You Will Ever Need](https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219)

* Read [Writing Neat Asynchronous Node JS Code with Promises](https://medium.com/dev-bits/writing-neat-asynchronous-node-js-code-with-promises-32ed3a4fd098)

* Do a Learning Log if you need clarity on anything from this week! Some suggestions:

    * node.js
    
    * asynchronous javascript/callback functions
    
    * promises
