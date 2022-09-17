import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadNote } from '../../helper';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './JournalSlice';

export const startNewNote = () => {
   return async (dispatch, getState) => {
      dispatch(savingNewNote());

      const { uid } = getState().auth;

      console.log(uid);
      // uid
      try {
         const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
         };
         // const newDoc = await addDoc(collection(FirebaseDB, 'notes'), newNote);
         // console.log('Note Added ', newDoc.id);

         const newDoc = doc(collection(FirebaseDB, `users-journal/${uid}/notes`));

         const setDocResp = await setDoc(newDoc, newNote);
         newNote.id = newDoc.id;
         dispatch(addNewEmptyNote(newNote));
         dispatch(setActiveNote(newNote));
      } catch (e) {
         console.error('Error adding document: ', e);
      }
   };
};

/**
 * ! This function is being using in useCheckAuth because that function is
 * ! the first one to be call in the app, after that is going to this function right here and then send the data to the redux  */
export const startLoadingNotes = () => {
   return async (dispatch, getState) => {
      const { uid } = getState().auth;
      if (!uid) throw new Error('User not auth');
      console.log(uid);
      const notes = await loadNote(uid);
      dispatch(setNotes(notes));
   };
};
