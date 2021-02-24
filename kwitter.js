var firebaseConfig = {
    apiKey: "AIzaSyCHVAgcR9NFCZYCFy7zEbh-7hHcewkQ6mM",
    authDomain: "kwitter-60175.firebaseapp.com",
    databaseURL: "https://kwitter-60175-default-rtdb.firebaseio.com",
    projectId: "kwitter-60175",
    storageBucket: "kwitter-60175.appspot.com",
    messagingSenderId: "810914239153",
    appId: "1:810914239153:web:42c3cb104bea7209148890"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser() {
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    email= document.getElementById("email").value;

    localStorage.setItem("email", email);

    Password= document.getElementById("Password").value;

    localStorage.setItem("Password", Password);
    
    window.location= "kwitter_room.html";
}