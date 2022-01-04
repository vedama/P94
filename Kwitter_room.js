const firebaseConfig = {
    apiKey: "AIzaSyCDYew783WFSf8mS_iipxAWp6HKQWo70YI",
    authDomain: "let-s-chat-36a95.firebaseapp.com",
    databaseURL: "https://let-s-chat-36a95-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-36a95",
    storageBucket: "let-s-chat-36a95.appspot.com",
    messagingSenderId: "751689926892",
    appId: "1:751689926892:web:13f2dff33520c97af83dc9"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}

username = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome " + username + "!"

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

function addRoom()
{
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }

