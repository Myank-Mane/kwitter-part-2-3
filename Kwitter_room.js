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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;

            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="
            Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location("kwitter_page.html");
}