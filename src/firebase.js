import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCuTYKq2dhh-g4m-aQL4J5GXW4rUwWb6eA",
    authDomain: "todoapp-6c3ea.firebaseapp.com",
    databaseURL: "https://todoapp-6c3ea-default-rtdb.firebaseio.com",
    projectId: "todoapp-6c3ea",
    storageBucket: "todoapp-6c3ea.appspot.com",
    messagingSenderId: "747970917570",
    appId: "1:747970917570:web:024c225f491d9309a0375b" 
});

export { firebaseConfig as firebase}