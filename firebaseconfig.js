var config = {
    apiKey: "AIzaSyAfQiaYFvHoAQYrcEegUjQMK5JEUcNLkQw",
    authDomain: "salem-85549.firebaseapp.com",
    databaseURL: "https://salem-85549.firebaseio.com/",
    storageBucket: "gs://salem-85549.appspot.com",
    };

    var pageAvaiableForAdmin = ["admin_employee_home_send.html","admin_home_page_employee.html","admin_employee_take_money.html"]
firebase.initializeApp(config);
var current_page_name = window.location.pathname.split("/").pop()

if(localStorage.getItem('key') == "2" && pageAvaiableForAdmin.includes(current_page_name)){

} else if(localStorage.getItem('key') != "1"){
    window.location.href = "home.html";
}

//alert(window.location.pathname.split("/").pop())