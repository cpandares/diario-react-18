import {
  loginWitEmailPass,
  logInWithGoogle,
  logoutFirebase,
  saveUserWithEmailPassord,
} from "../../firebase/providers";
import { clearNotes } from "../journal/journalSlice";
import { chekingData, logout, login } from "./";

export const checkingStatus = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingData());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(chekingData());

    const result = await logInWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startSaveUserEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(chekingData());

    const { ok, uid, photoURL, errorMessage } = await saveUserWithEmailPassord({
      email,
      password,
      displayName,
    });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWihtEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(chekingData());

    const resp = await loginWitEmailPass({ email, password });

    if (!resp.ok) return dispatch(logout(resp));

    dispatch(login(resp));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotes())
    dispatch(logout());
  };
};

