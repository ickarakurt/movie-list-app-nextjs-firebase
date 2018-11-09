// Config file
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDEgZ6BwmuV2kYRqptm7yPdLcMI4v15eiE",
    authDomain: "movielist-addfe.firebaseapp.com",
    databaseURL: "https://movielist-addfe.firebaseio.com",
    projectId: "movielist-addfe",
    storageBucket: "movielist-addfe.appspot.com",
    messagingSenderId: "883340761611"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
