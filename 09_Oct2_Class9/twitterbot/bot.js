console.log("The bot begins ...")


var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//T.get('search/tweets', { q: 'banana since:2011-07-11', count: 10 }, function(err, data, response) {
//  console.log(data)
//})



setInterval(tweets, 1000*20);

function tweets(){
    var costume = ["ghost", "The Nun", "witch", "pumpking", "vampire"]
    var quote = costume[Math.floor(Math.random()*costume.length)];
    
    
    var tweet = {
        status: quote
    } 

T.post('statuses/update', tweet, didIttweet);

    function didIttweet(err, data, response){
        if (err){
            console.log("it didn't work");
        }else{
            console.log("it worked!");
        }
    }

};

tweets();





