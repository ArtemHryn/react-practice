import { createSlice } from '@reduxjs/toolkit';

export const wordSlice = createSlice({
  name: 'word',
  initialState: [],
  reducers: {
    addWords: (state, action) => {
      state.push(...action.payload);
    },
    deleteWord: (state, action) => {
      const index = state.findIndex(el => el.id === action.payload.id);
      state.splice(index, 1);
    },
    editWords: (state, action) => {
    const index = state.findIndex(el => el.id === action.payload.id);
    state.splice(index, 1, action.payload);
    },
  },
});

export const { addWords, deleteWord, editWords } = wordSlice.actions;

export default wordSlice.reducer;

// const index = state.findIndex(el => el.id === action.payload.id);
// state.splice(index, 1);
