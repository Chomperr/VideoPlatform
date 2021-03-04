//import {db } from "../firebase";
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

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const api = {}

const TABLES = {
    videoList: 'videoList',
    userList: []
}



const generateId = length => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    const charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

api.addVideo = async (values = {}) => {
    const id = generateId(20)
    let newObj = {...values, id};
    await db.collection(TABLES.videoList).doc(id).set(newObj);
    return id;
}

api.getVideoList = async () => {
    const documents = await db.collection(TABLES.videoList).get()
    const list = documents.docs.map(d => {
        let data = d.data();
        return {
        ...data,
        date: data.date ? new Date(data.date.seconds * 1000) : new Date()
        }
    })
    return list;
}

api.deleteVideo = async id =>{
    await db.collection(TABLES.videoList).doc(id).delete();
    return true;
}

api.addUser = async (values={})=> {
    const id = generateId(20);
    let newObj = {...values, id};
    localStorage.setItem(values.username, JSON.stringify(newObj));
    TABLES.userList = (TABLES.userList + newObj);
    console.log(id);
    console.log(JSON.stringify(newObj));
    console.log(TABLES.userList);
    return localStorage.getItem(id);
}

api.findUser = async (username) => {
    return TABLES.userList.find((username) => TABLES.userList.username === username)
}

export default api;

