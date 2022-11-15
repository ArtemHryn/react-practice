import { createSelector } from '@reduxjs/toolkit';

const store = state => state;
const words = state => state.words;
const filter = state => state.filter;
export const getWords = createSelector([words, filter], (words, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return words.filter(word => {
    return (
      word.engWord.toLowerCase().includes(normalizedFilter) ||
      word.ukrWord.toLowerCase().includes(normalizedFilter)
    );
  });
});

export const getWordsToLearn = createSelector([words], words => {
  return words.filter(word => word.isLearn);
})

export const getFilter = createSelector(store, state => state.filter);


