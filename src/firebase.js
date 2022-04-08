import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAYNrZNGO0Sw8kB0v6ZWeGHGJU2gKqNuGc",
    authDomain: "chat-auth-dev.firebaseapp.com",
    projectId: "chat-auth-dev",
    storageBucket: "chat-auth-dev.appspot.com",
    messagingSenderId: "690210359467",
    appId: "1:690210359467:web:535b22b6611dc806108fee"
})


export const auth = app.auth()
export default app