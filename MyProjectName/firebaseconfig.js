// firebaseConfig.js
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvAr0Lb2gPlR0ZFLGer4cPxzEdnE8NgBY",
  authDomain: "lostandfound-c04a2.firebaseapp.com",
  projectId: "lostandfound-c04a2",
  storageBucket: "lostandfound-c04a2.appspot.com",
  messagingSenderId: "308981291165",
  appId: "1:308981291165:web:d4dea5bb9793eb51cf1c74",
  measurementId: "G-K7R7GZR7YS"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, firestore };
