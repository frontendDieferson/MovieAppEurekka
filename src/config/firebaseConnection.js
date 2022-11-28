import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIZfBCH-TXm6EOO554YZ2rwIYfGaSh95w",
  authDomain: "movieapp-3b402.firebaseapp.com",
  projectId: "movieapp-3b402",
  storageBucket: "movieapp-3b402.appspot.com",
  messagingSenderId: "375325717539",
  appId: "1:375325717539:web:50907d34b7497badb0ed96",
  measurementId: "G-733EG8K7G4"
};

firebase.initializeApp(firebaseConfig)
export default firebase