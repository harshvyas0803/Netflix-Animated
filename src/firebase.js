import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAeI1s6PJW7NnhMtXyfaT5cWECGCjgFMAc",
  authDomain: "netflix-clone-53e30.firebaseapp.com",
  projectId: "netflix-clone-53e30",
  storageBucket: "netflix-clone-53e30.appspot.com",
  messagingSenderId: "58167415232",
  appId: "1:58167415232:web:1a5af7630a82cbeb443825",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authprovider: "local",
      email,
    });

    toast.success("Sign up successful!");
  } catch (error) {
    console.log(error);
    toast.error(error.message.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");
  } catch (error) {
    console.log(error);
    toast.error(error.message.split('/')[1].split('-').join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully!");
  } catch (error) {
    console.log(error);
    toast.error(error.message.split('/')[1].split('-').join(" "));
  }
};

export { auth, db, login, signup, logout };
