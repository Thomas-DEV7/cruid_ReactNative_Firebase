
import firebase from "firebase/compat/app";
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyBcoDYQZA_b3hYapBXsKMLhVgPzf4bSZ9c",
  authDomain: "dbfelipefirebase.firebaseapp.com",
  databaseURL: "https://dbfelipefirebase-default-rtdb.firebaseio.com",
  projectId: "dbfelipefirebase",
  storageBucket: "dbfelipefirebase.appspot.com",
  messagingSenderId: "263387170788",
  appId: "1:263387170788:web:9da90e1e38e96da023a9f1"
};


if(!firebase.app.length == 0) {

    firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
export default firebase;