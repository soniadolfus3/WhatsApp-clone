import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDdEzvuGJ9yRSXbVzatFvk91P9yZJcmI7E",
    authDomain: "whatsapp-clone-64eee.firebaseapp.com",
    projectId: "whatsapp-clone-64eee",
    storageBucket: "whatsapp-clone-64eee.appspot.com",
    messagingSenderId: "199770408913",
    appId: "1:199770408913:web:9209991c1eef52ccf102f0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;
