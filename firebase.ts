// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADk6wW8p9-c1zQr4Dk073gbmzKAJ__hjY",
  authDomain: "netflix-clone-fd066.firebaseapp.com",
  projectId: "netflix-clone-fd066",
  storageBucket: "netflix-clone-fd066.appspot.com",
  messagingSenderId: "367454745779",
  appId: "1:367454745779:web:46464cf9752dacbe5a6cc6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }