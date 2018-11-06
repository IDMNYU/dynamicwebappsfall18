var express = require('express');
var app = express();
var ejs = require('ejs');

//set the engine that is going to render your view
app.set('view engine', 'ejs');

var data = {
    groceries: [{
              store: 'Acme',
              list: [
                   'strawberries',
                   'blueberries',
                   'yogurt'
              ]
        }, {
             store: 'Corner Market',
             list: [
                 'baguette',
                 'basil',
                 'tomatoes'
            ]
         }]
};

//app.get('/date', function(request, response){
//    response.render('index')    
//});

//rendering a simple string from app.js to index.js
//app.get('/name', function(request, response){
//    response.render('index', {pizza: 'Sarah'})
//});

app.get('/', function(request, response){
 response.render('index', {groceryitems: data.groceries})   
})


app.listen(3000, function(){
    console.log('app is running on port 3000!');
});