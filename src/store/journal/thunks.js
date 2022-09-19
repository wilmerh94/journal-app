import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { fileUpload, loadNote } from '../../helper';
import {
   addNewEmptyNote,
   deleteNoteById,
   savingNewNote,
   setActiveNote,
   setNotes,
   setPhotoId,
   setPhotosToActiveNote,
   setSaving,
   updatedNote,
} from './JournalSlice';

export const startNewNote = () => {
   return async (dispatch, getState) => {
      dispatch(savingNewNote());

      const { uid } = getState().auth;

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
      const notes = await loadNote(uid);
      dispatch(setNotes(notes));
   };
};

export const startSaveNote = () => {
   return async (dispatch, getState) => {
      dispatch(setSaving());

      const { uid } = getState().auth;
      const { active: note } = getState().journal;
      console.log(note);
      const noteToFirestore = { ...note };
      delete noteToFirestore.id;
      /* This function is grabbing the collection first and then going to the params i need */
      const newDoc = doc(
         collection(FirebaseDB, 'users-journal', `${uid}`, 'notes'),
         `${note.id}`,
      );
      const setDocResp = await setDoc(newDoc, noteToFirestore, { merge: true });
      dispatch(updatedNote(note));
   };
};

export const startUploadingFile = (files = []) => {
   return async (dispatch) => {
      dispatch(setSaving());

      // await fileUpload(files[0]);
      const fileUploadPromises = [];
      const fieldName = [];
      const fieldUrl = [];

      for (const file of files) {
         fileUploadPromises.push(fileUpload(file));
      }
      const photosUrls = await Promise.all(fileUploadPromises);
      for (const photosUrl of photosUrls) {
         fieldName.push(photosUrl.public_id);
         fieldUrl.push(photosUrl.secure_url);
      }

      console.log('fieldName', fieldName);
      console.log('fieldUrl', fieldUrl);
      dispatch(setPhotosToActiveNote(fieldUrl));
      dispatch(setPhotoId(fieldName));
   };
};

export const startDeletingNote = () => {
   return async (dispatch, getState) => {
      const { uid } = getState().auth;
      const { active: note, imageId } = getState().journal;
      console.log(uid, note);
      const docRef = doc(FirebaseDB, 'users-journal', `${uid}`, 'notes', `${note.id}`);
      await deleteDoc(docRef);
      dispatch(deleteNoteById(note.id));
      const cloudUrl = 'https://api.cloudinary.com/v1_1/dvgoznsqo/destroy';
      const formData = new FormData();
      formData.append('public_id', imageId);

      const resp = await fetch(cloudUrl, {
         method: 'POST',
         body: formData,
      });
      console.log(resp);
   };
};
// journal-app/ft4rg2y36qh8pnyhg2pl.jpg
