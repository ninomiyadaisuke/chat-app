import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBexIGFPrBTIkBF8D28ZIeUV6LoaqUjVDk",
    authDomain: "communication-chat-app.firebaseapp.com",
    databaseURL: "https://communication-chat-app.firebaseio.com",
    projectId: "communication-chat-app",
    storageBucket: "communication-chat-app.appspot.com",
    messagingSenderId: "951642583560",
    appId: "1:951642583560:web:fda2aec7fc9677e77d97bd"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const messageRef = database.ref('messages')

export const pushMessage = ({name, text}) => {
    messageRef.push({name, text})
}

