# Javascript Review

## Variables

We declare variables with the ```var``` keyword. You don't need to declare variable type, it's inferred.

```javascript
var name; 				// declare an empty variable
name = "Sam";				// define it

// You can also declare and define in a single line

var name = "Sarah"; 		// a string
var onePlusOne = 2; 	// an integer
var sortofPI = 3.1415; 	// a float
var thisIsFun = true; 	// a boolean
```

NOTE: Javascript will NOT complain if you don't have the ```var``` keyword. But NEVER do this because it will put that variable in the global scope.

ANOTHER NOTE: You may have seen Javascript variables defined with const or let. This is how ES6 treats variables and is more specific. However, node.js utilizes ES5, so we will continue with the var syntax. To read more on the difference between these definitions [click here](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75).


## Strings
```javascript
var firstName = "Sarah";
var lastName = "Dahnke"

// concatenate strings
var fullName = firstName + " " + lastName; // returns "Sarah Dahnke"

// access a character of a string
var secondLetter = fullName[1];
```

## Arrays

An array is a list of variables, numerically indexed starting with 0. In javascript we can put variables of any type into an array, and we can mix and match.

```javascript
var myList = []; // An empty array

// declaring a populated array
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Get the first element in an array
var firstDay = days[0]; // returns "Monday"

// Get the last element in an array
var lastDay = days[days.length-1] // returns "Friday

// Get the length of an array
var totalDays = days.length; // returns 5

// Add something to the end of an array
days.push("Saturday");

// loop through an array and print it's values
for (var i = 0; i < days.length; i++) {
	console.log(days[i]);
}
```

## Functions

```javascript
function sayHi() {
	console.log("Hello");
}

sayHi() // will print "Hello" and return "undefined"


// adding a parameter
function sayHi(name) {
	var message = "Hello " + name;
	console.log(message);
}

sayHi("Sam");

// return values
function sayHi(name) {
	var message = "Hello " + name;
	return message;
}

var helloMessage = sayHi("Sam");
```


### Functions are variables

Functions also act like variables, so we can declare them like variables

```javascript
var multiplier = function(number1, number2) {
	return number1 * number2;
}
multiplier(2, 5) // returns 10

var subtractor = function(number1, number2) {
	return number1 - number2;
}
subtractor(5, 3) // returns 2
```

Because functions act like variables, we can pass them around to other functions. We do this by using their name WITHOUT the parenthesis. Here's a totally useless example of this in action

```javascript
function doAMathThing(number1, number2, mathFunction) {
	var result = mathFunction(number1, number2);
	return result;
}

doAMathThing(7, 4, subtractor) // returns 3

doAMathThing(7, 4, multiplier) // returns 28

```

The ability to pass functions to other functions is a key feature of javascript, and used constantly. Specifically, in callback functions...


