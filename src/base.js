import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCU2riEO-VTzLdoB1SCWd64vcE6D-lYffM",
  authDomain: "slashdev01.firebaseapp.com",
  databaseURL: "https://slashdev01.firebaseio.com",
  projectId: "slashdev01",
  storageBucket: "slashdev01.appspot.com",
  messagingSenderId: "606100177398",
  appId: "1:606100177398:web:05d631067dca5b65fd47d7",
  measurementId: "G-GR8R4S2ZVT"
})

export const auth = app.auth()
export default app

/*
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
*/