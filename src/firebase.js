import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDiMJ4Z0EoBHF1Vt-wxzqjuZdjh_CncVUo",
  databaseURL: "https://treinamento-3c0ef-default-rtdb.firebaseio.com/",
  authDomain: "treinamento-3c0ef.firebaseapp.com",
  projectId: "treinamento-3c0ef",
  storageBucket: "treinamento-3c0ef.appspot.com",
  messagingSenderId: "621654095778",
  appId: "1:621654095778:web:57aa95ed10f52d566164fb",
  measurementId: "G-3VFEMFPKJP"
};


/*
console.log(firebase.apps.length);

if (! firebase.apps.length) { 
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const db = firebase.firestore(); */
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
//const db = {collection: {}, doc: {} }
const db = firebase.firestore();
export {
	db,
	firebase
}