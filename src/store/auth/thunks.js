import {
   loginUserWithEmail,
   logoutFirebase,
   registerUserWithEmail,
   signInWithGoogle,
} from '../../firebase/provider';
import { clearNoteLogout } from '../journal/JournalSlice';
import { checkingCredentials, login, logout } from './';

export const checkingAuthentication = (email, password) => {
   return async (dispatch) => {
      dispatch(checkingCredentials());
   };
};

export const startGoogleSignIn = () => {
   return async (dispatch) => {
      dispatch(checkingCredentials());
      const result = await signInWithGoogle();

      if (!result.ok) return dispatch(logout(result.errorMessage));
      delete result.ok;
      dispatch(login(result));
   };
};

export const startCreatingUserWithEmailPassword = ({ displayName, email, password }) => {
   return async (dispatch) => {
      dispatch(checkingCredentials());

      const { ok, uid, photoURL, errorMessage } = await registerUserWithEmail({
         displayName,
         email,
         password,
      });
      if (!ok) return dispatch(logout({ errorMessage }));
      dispatch(login({ uid, displayName, email, photoURL }));
   };
};

export const startLoginUserWithEmailPassword = ({ email, password }) => {
   return async (dispatch) => {
      dispatch(checkingCredentials());
      const result = await loginUserWithEmail({ email, password });
      console.log(result);
      if (!result.ok) return dispatch(logout(result));
      delete result.ok;

      dispatch(login(result));
   };
};

export const startLogout = () => {
   return async (dispatch) => {
      await logoutFirebase();

      dispatch(clearNoteLogout());
      dispatch(logout());
   };
};
