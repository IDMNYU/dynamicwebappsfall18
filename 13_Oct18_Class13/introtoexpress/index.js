console.log('hello server');

const express = require('express');

const app = express();

const server = app.listen(3000, listening);

//other ports: 8000, 8080

function listening(){
    console.log('I am listening...')
}

app.use(express.static('public'));

app.get('/hello', sayHello);

function sayHello(request, response){
    response.send('Hello to you!')
}

app.get('/hi/:database/', sayHi);

function sayHi(request, response){
    const data = request.params;
    response.send('Hi ' + data.database + '. How are you?')
}

//chain 2 variables in your route and create a function that will say hi to a person a number of times based on the number in the second variable of the route

//example of 2 variables in a route: '/hi/:database/:anotherroute'

//var 
//const
//let 

app.get('/hi/:name/:num', sayHitwo);

function sayHitwo(request, response) {
    const data = request.params;
    let numHi = "";
    for (let i = 0; i < data.num; i++) {
        numHi += 'Hi ' + data.name + ' How are you?';
    }
    response.send(numHi);
    
};





