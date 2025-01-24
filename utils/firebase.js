// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBIDMxxXIZlyvsDR2up4nannnrJbIeIgA",
  authDomain: "minisocialmedia-fa82d.firebaseapp.com",
  projectId: "minisocialmedia-fa82d",
  storageBucket: "minisocialmedia-fa82d.firebasestorage.app",
  messagingSenderId: "126094749108",
  appId: "1:126094749108:web:35282aa72211f1841f96e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const firebaseCreateUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      return error;
    });
};
