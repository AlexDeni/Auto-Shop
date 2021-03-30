import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/storage'

let firebaseConfig = {
    apiKey: "AIzaSyC98ZK6jPh6W-IrbdthKkKZigM-iIKTmg0",
    authDomain: "auto-shop-f8fc6.firebaseapp.com",
    projectId: "auto-shop-f8fc6",
    storageBucket: "auto-shop-f8fc6.appspot.com",
    messagingSenderId: "96308180430",
    appId: "1:96308180430:web:bb6f9e91df2d16bdf8679f"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();

export {
    db,
    auth,
};


