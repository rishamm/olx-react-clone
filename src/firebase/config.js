import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCa5LThfLtGIm_3YceDLl7kVar52LDrbAo",
    authDomain: "olx-demo-c88a4.firebaseapp.com",
    projectId: "olx-demo-c88a4",
    storageBucket: "olx-demo-c88a4.appspot.com",
    messagingSenderId: "168155494072",
    appId: "1:168155494072:web:5bb09fd778cc4477de264d",
    measurementId: "G-JST8WEXSF2"
  };

  export  default firebase.initializeApp(firebaseConfig);