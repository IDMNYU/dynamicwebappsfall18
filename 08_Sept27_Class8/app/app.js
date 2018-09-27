//const greeter = require('./index.js'); 
//
//greeter.hello("Ari");
//
//greeter.bye("Maya");


//Use greetings.js as a module connected to app.js. You should be able to run app.js to access code you have written in greetings.js
//Example: My greetings.js file includes a sayHelloinEnglish and a sayHelloinSpanish function that app.js can access to say "Hello" or "Hola"

const greeter = require("./greetings.js");

greeter.greeting("Ari");
greeter.goodbye("Maya");