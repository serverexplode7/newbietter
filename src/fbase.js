import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjVBzyfRVzWCg25rbU1BADMtmnh1KKPk0",
  authDomain: "newbietter.firebaseapp.com",
  databaseURL: "https://newbietter.firebaseio.com",
  projectId: "newbietter",
  storageBucket: "newbietter.appspot.com",
  messagingSenderId: "879383703634",
  appId: "1:879383703634:web:3dfd42095511c8a0eaaf8b",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
