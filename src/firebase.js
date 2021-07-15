import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAGpVWcV1rA77lC9bjbDqHhdaMiB0p4jRY",
  authDomain: "admin-3f38d.firebaseapp.com",
  projectId: "admin-3f38d",
  storageBucket: "admin-3f38d.appspot.com",
  messagingSenderId: "615897995270",
  appId: "1:615897995270:web:87cc03488e6d3943424b87",
  measurementId: "G-YV9SLJNEKR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
