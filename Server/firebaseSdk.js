// Import the functions you need from the SDKs you need
const { initializeApp } = require ("./node_modules/firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const admin = require("firebase-admin");
const serviceAccount = require('./serviceAccountKey.json')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy2QN719VZdopR9N2Vbeks0BkQHz6kCrc",
  authDomain: "lost-and-found-82bc6.firebaseapp.com",
  projectId: "lost-and-found-82bc6",
  storageBucket: "lost-and-found-82bc6.appspot.com",
  messagingSenderId: "888324454293",
  appId: "1:888324454293:web:9c80063b84d5006c4f289c",
  measurementId: "G-L7DMCV1ZKE"
};
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "lost-and-found-82bc6", // Use your project ID
});
// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports = { admin };

