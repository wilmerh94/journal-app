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
      },
      setSaving: (state) => {},
      updateNote: (state, action) => {},
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
   updateNote,
   deleteNoteById,
} = JournalSlice.actions;
