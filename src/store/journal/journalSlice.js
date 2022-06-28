import { createSlice } from "@reduxjs/toolkit";
export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    notes: [],
    messageSaved: "",
    active: null,
   
  },
  reducers: {
    isCreating: (state)=>{
        state.isSaving = true
    },
    addEmptyNote: (state, action) => {
        state.notes.push( action.payload )
        state.isSaving = false
    },
    setActive: (state, action) => {
        state.active = action.payload;
        state.messageSaved = ''
    },
    setNotes: (state, action) => {
        state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map(note =>{
        if(note.id === action.payload.id)
        return action.payload
        return note;
      } )
      state.messageSaved = `${ action.payload.title } updated succesfully`
    },
    setPhotosToActiveNote : (state,action)=>{
        state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
        state.isSaving = false;
    },
    clearNotes: (state)=>{
        state.isSaving = false;
        state.active = null;
        state.notes = [];
        state.messageSaved = ''
    },
    deleteNote: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter(note=> note.id !== action.payload)
    },
  },
});

export const {
  addEmptyNote,
  setActive,
  setNotes,
  setSaving,
  updateNote,
  deleteNote,
  isCreating,
  setPhotosToActiveNote,
  clearNotes
} = journalSlice.actions;
