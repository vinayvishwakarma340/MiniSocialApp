import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

export const auth = getAuth(app);
