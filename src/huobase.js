import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// firebase에 관련된 정보들
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DARABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
//Initializing Firebase

firebase.initializeApp(firebaseConfig);

export const firebaseInstance =firebase;

export const authService = firebase.auth();