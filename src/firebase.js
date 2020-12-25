import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB6Y_GrDOkDAczogy1vBaMb6cH41usVpDo",
    authDomain: "chaitanya-whatsapp.firebaseapp.com",
    projectId: "chaitanya-whatsapp",
    storageBucket: "chaitanya-whatsapp.appspot.com",
    messagingSenderId: "919777796401",
    appId: "1:919777796401:web:c15e7002ac9c22f76d9010",
    measurementId: "G-TLE84SLLL7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db; 