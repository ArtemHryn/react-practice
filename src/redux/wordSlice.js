import { createSlice } from '@reduxjs/toolkit';
import { addWordsAsync, deleteWord, fetchWords, updateWord } from './operations';

export const wordSlice = createSlice({
  name: 'word',
  initialState: [],
  reducers: {
    addWords: (state, action) => {
      state.push(...action.payload);
    },
    // deleteWord: (state, action) => {
    //   const index = state.findIndex(el => el.id === action.payload.id);
    //   state.splice(index, 1);
    // },
    editWords: (state, action) => {
      const index = state.findIndex(el => el.id === action.payload.id);
      state.splice(index, 1, action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addWordsAsync.fulfilled, (state, action) => {
        state.push(...action.payload);
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state = action.payload;
        return state
      }).addCase(deleteWord.fulfilled, (state, action) => {
        return state.filter(word => word.id !== action.payload)
      }).addCase(updateWord.fulfilled, (state, action) => {
        const index = state.findIndex(word => word.id === action.payload.id)
        state.splice(index, 1, action.payload)
      });
  },
});

export const { addWords, editWords } = wordSlice.actions;

export default wordSlice.reducer;

// const index = state.findIndex(el => el.id === action.payload.id);
// state.splice(index, 1);
