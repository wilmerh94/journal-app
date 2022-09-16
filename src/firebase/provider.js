import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithPopup,
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
      console.log(resp);
   } catch (error) {
      return { ok: false, errorMessage: error.message };
   }
};
