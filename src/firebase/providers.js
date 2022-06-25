

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const logInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    /*  const credentials = GoogleAuthProvider.credentialFromResult(result) */
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const saveUserWithEmailPassord = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = resp.user;

    await updateProfile(firebaseAuth.currentUser, {
      displayName,
    });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error);
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginWitEmailPass = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

   
    const { uid, displayName, photoURL } = resp.user;

    return {
      ok: true,
      uid,
      displayName,
      photoURL,
     
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const logoutFirebase = async()=>{

  return await firebaseAuth.signOut();
}
