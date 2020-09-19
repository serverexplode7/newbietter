import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBjVBzyfRVzWCg25rbU1BADMtmnh1KKPk0",
    authDomain: "newbietter.firebaseapp.com",
    databaseURL: "https://newbietter.firebaseio.com",
    projectId: "newbietter",
    storageBucket: "newbietter.appspot.com",
    messagingSenderId: "879383703634",
    appId: "1:879383703634:web:3dfd42095511c8a0eaaf8b"
};

export default firebase.initializeApp(firebaseConfig);