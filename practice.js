const firebaseConfig = {

    apiKey: "AIzaSyBH4jZTYg9ZOVyuHFJu_VBQTZNPm0Dc1yo",
  
    authDomain: "kwitterdatabase-100cb.firebaseapp.com",
  
    databaseURL: "https://kwitterdatabase-100cb-default-rtdb.firebaseio.com",
  
    projectId: "kwitterdatabase-100cb",
  
    storageBucket: "kwitterdatabase-100cb.appspot.com",
  
    messagingSenderId: "312241363480",
  
    appId: "1:312241363480:web:e45c49160101d9663ec16d",
  
    measurementId: "G-43B0C0XE4X"
  
  };
  
  // Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding_user"
    });
}