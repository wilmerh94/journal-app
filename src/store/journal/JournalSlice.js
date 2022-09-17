import { createSlice } from '@reduxjs/toolkit';

export const JournalSlice = createSlice({
   name: 'journal',
   initialState: {
      isSaving: false,
      messageSaved: '',
      notes: [],
      active: null,
      // active: {
      //    id: '',
      //    title: '',
      //    body: '',
      //    date: Number,
      //    imageUrls: [], //https://github.jpg, https://github.jpg ...
      // },
   },
   reducers: {
      savingNewNote: (state) => {
         state.isSaving = true;
      },
      addNewEmptyNote: (state, action) => {
         state.notes.push(action.payload);
         state.isSaving = false;
      },
      setActiveNote: (state, action) => {
         state.active = action.payload;
      },
      setNotes: (state, action) => {
         state.notes = action.payload;
         state.messageSaved = '';
      },
      setSaving: (state) => {
         state.isSaving = true;
         state.messageSaved = '';
      },
      updatedNote: (state, action) => {
         //payload:note
         state.isSaving = false;
         state.notes = state.notes.map((note) => {
            if (note.id === action.payload.id) {
               return action.payload;
            }
            // If ID are not the same return the same note
            return note;
         });

         // state.messageSaved = `${action.payload.title}, updated`;
         state.messageSaved = `Your change has been updated!`;
      },
      deleteNoteById: (state, action) => {},
   },
});
// Action creators are generated for each case reducer function
export const {
   savingNewNote,
   addNewEmptyNote,
   setActiveNote,
   setNotes,
   setSaving,
   updatedNote,
   deleteNoteById,
} = JournalSlice.actions;
