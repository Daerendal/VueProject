import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCjLQWhVEHmuFL7rNN-Gmz216wIHIP35h4",
    authDomain: "vuefirebase-e7cfe.firebaseapp.com",
    databaseURL: "https://vuefirebase-e7cfe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vuefirebase-e7cfe",
    storageBucket: "vuefirebase-e7cfe.appspot.com",
    messagingSenderId: "594424038099",
    appId: "1:594424038099:web:56cc7bce04f59e43044a26"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
