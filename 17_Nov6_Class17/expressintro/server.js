//npm install express --save

//demo npm init package.json file & file structure
//npm init --yes will instal a default file

//first console log a statement that will allow you to check if everything is working
console.log('the server is running');

//require express
const express = require('express');

//express is actually a function that we can call 
const app = express();

//opens a listening port, without the callback, there is no feedback in the terminal
const server = app.listen(3000, listening);

//callback ensures the developer gets feedback in the terminal that the app is listening for information to serve
function listening(){
	console.log('listening');
}

//right now, if you visit localhost:3000 you will get a cannot /get function. This is simply letting us know there is nothing to serve.

//use express to host static files. Public is a variable in this instance. The app will look for any static files in the folder named here.
app.use(express.static('public'));

//visit localhost:3000 after creating an html file in the public folder to now see a file being served

//creating our first route 
//routes can be commands that create ways to access data, rather than directories
//setting up a get request to get data from the server

app.get('/hello', sayHello);

//every web transaction has a request and a response
function sayHello(request, response){
	response.send("Hello to you!") //what you are sending back
}

//creating a variable route
app.get('/hi/:database', sayHi);

function sayHi(request, response){
	const data = request.params;
	response.send('Hi ' + data.database + '. How are you?')
} 

//install nodemon so that you don't have to restart the server each time

//you can chain variables in your route and then send them to functions 

app.get('/hi/:firstname/:number', helloAgain);

function helloAgain(request, response){
	let data = request.params;
	let x = data.number;
	let reply = '';
	for (let i = 0; i < x; i++){
		reply += 'Hi ' + data.firstname + '. How are you?'
	}
	response.send(reply)
}



