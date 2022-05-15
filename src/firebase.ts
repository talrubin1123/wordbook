import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";


import { getFirestore, addDoc, collection } from "firebase/firestore";
import {atom, useRecoilState} from 'recoil';

const firebaseConfig = {
  apiKey: "AIzaSyAsiEPQzvTbMlOWAFUIFESThZ7ED2tFqyY",
  authDomain: "spic-554f1.firebaseapp.com",
  projectId: "spic-554f1",
  storageBucket: "spic-554f1.appspot.com",
  messagingSenderId: "663901857761",
  appId: "1:663901857761:web:82ab76badcd93423e414a0",
  measurementId: "G-4K35XLKJ0V"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
  try {
    const {user} = await signInWithPopup(auth, googleProvider);
    return user;
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const {user} = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

const registerWithEmailAndPassword = async (name:string, email:string, password:string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
      return user;
    } catch (err:any) {
      console.error(err);
      alert(err.message); // swal  later
    }
  };

  const logout = async () => {
      return await signOut(auth);
  }

  export {
    logInWithEmailAndPassword,
    signInWithGoogle,
    registerWithEmailAndPassword,
    logout,
    auth,
  }