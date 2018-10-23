//reference fs
var fs = require('fs');

//include this after we make the json file
var data = fs.readFileSync('words.json');

//this line parses the raw data to make it readable and interprets it as a JavaScript object
var words = JSON.parse(data);
console.log(words);

//just ensure your script is set up correctly
console.log("server is starting");

//imports express package, which is actually a function
var express = require('express');

//making an expres app
var app = express();

//you can also create a callback function here to get information back in the terminal and verify it's working.
var server = app.listen(3000, listening);

function listening(){
    console.log("listening")
}

//route that allows user to add a word via the route parameters 

//add a question mark to score if you want score to be optional
app.get('/add/:word/:score', addWord);
function addWord(request, response){
	var data = request.params; //word and score are parameters
    var word = data.word;	
    var score = Number(data.score);
    words[word] = score;
    var data = JSON.stringify(words); 
    fs.writeFile('words.json', data, finished);
        function finished(err) {
            console.log('got the word')
        } 
    var reply = {
        msg: "Thank you for your word."
    }
	response.send(reply)
}
   
//route that allows the user to see all the data inside of words.json
app.get('/all', sendAll);

////callback function to allow a user to send data and receive a response
function sendAll(request, response){
    response.send(words);
}
  
//allows the user to query for the score of a word

app.get('/search/:word/', searchWord);

function searchWord(request, response){
        var word = request.params.word;
        var reply;
        if (words[word]) {
        reply = {
            status: 'found', 
            word: word,
            score: words[word]
        }
    } else {
        reply = {
            status: 'not found',
            word: word
        }
    }
    
response.send(reply);
}
      