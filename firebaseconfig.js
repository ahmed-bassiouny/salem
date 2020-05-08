var config = {
    apiKey: "AIzaSyAfQiaYFvHoAQYrcEegUjQMK5JEUcNLkQw",
    authDomain: "salem-85549.firebaseapp.com",
    databaseURL: "https://salem-85549.firebaseio.com/",
    storageBucket: "gs://salem-85549.appspot.com",
    };

firebase.initializeApp(config);
if(localStorage.getItem('key') != "true"){
    window.location.href = "home.html";
}
