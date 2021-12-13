import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCaxa9scWr0NMCIla6SuclGB89bGlIP4HY',
    authDomain: 'blog-2dcaf.firebaseapp.com',
    projectId: 'blog-2dcaf',
    storageBucket: 'blog-2dcaf.appspot.com',
    messagingSenderId: '46706496073',
    appId: '1:46706496073:web:f1927d5e70850079c06598',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
