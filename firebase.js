// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFHYI9EIcXX_H4HhLKH8ZTTQrefyL5_PY",
  authDomain: "loginapp-a0e67.firebaseapp.com",
  projectId: "loginapp-a0e67",
  storageBucket: "loginapp-a0e67.appspot.com",
  messagingSenderId: "1033768015647",
  appId: "1:1033768015647:web:899d211b71fd402dff022a"
};

// Initialize Firebase
if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };