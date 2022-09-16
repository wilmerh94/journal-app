import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithEmailAndPassword,
   signInWithPopup,
   updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
   try {
      const result = await signInWithPopup(FirebaseAuth, googleProvider);
      console.log(result);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      const { displayName, email, photoURL, uid } = result.user;
      return {
         ok: true,
         /* user info */
         displayName,
         email,
         photoURL,
         uid,
      };
   } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      return { ok: false, errorMessage };
   }
};

export const registerUserWithEmail = async ({ displayName, email, password }) => {
   try {
      const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
      const { uid, photoURL } = resp.user;
      await updateProfile(FirebaseAuth.currentUser, { displayName });
      return { ok: true, uid, photoURL, email, displayName };
   } catch (error) {
      /**TODO:  Use error message with react toast to create a modal for that */
      return { ok: false, errorMessage: error.message };
   }
};

export const loginUserWithEmail = async ({ email, password }) => {
   try {
      const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
      const { uid, photoURL, displayName } = resp.user;
      return { ok: true, uid, photoURL, displayName };
   } catch (error) {
      return { ok: false, errorMessage: error.message };
   }
};
