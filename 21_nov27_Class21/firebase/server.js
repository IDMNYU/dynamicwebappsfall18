//allowing you admin acces via the server side
var admin = require("firebase-admin");
//all the stuff you need to connect to your app on Firebase, provided by Firebase
var serviceAccount = require("./serviceAccountKey.json"); //this is a reference to the json file you have to download via Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://inclasstest-a1f60.firebaseio.com"
});

//creating a reference to the database object, which in this case is Firebase
var db = admin.database();

//ref holds the contents of your DB
var ref = db.ref();

//creating a snapshot of the DB
 ref.once("value", function(snapshot) {
  console.log(snapshot.val());
 });

//creating a child node to put our data inside
var usersRef = ref.child('users');

//.push is going to add our data into the DB with a unique ID, no overwriting
usersRef.push({
    sarah_rose:{
        birthdate: "June 26",
        fullName: "Sarah Rose Dahnke"
    },
    matthew_james:{
        birthdate: "August 31",
        fullName: "Matthew James Dahnke" 
    },
    patti_lee:{
        birthdate: "August 29",
        fullName: "Patti Lee Dahnke"
    }
});

//.updating one username to the DB
//usersRef.update({
//    chris:{
//        birthdate: "January 2",
//        fullName: "Chris"
//    }
//});
















