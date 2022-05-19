import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq6G-u7Oq4tfbkl3fwp6zSSPsmKtARQeA",
  authDomain: "newmemories.firebaseapp.com",
  projectId: "newmemories",
  storageBucket: "newmemories.appspot.com",
  messagingSenderId: "1050403164416",
  appId: "1:1050403164416:web:bee8ef793b075ae97ae3e5",
  measurementId: "G-PBD1L0JDF4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
