import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://6381c8e09842ca8d3c99a687.mockapi.io/learn_words';

export const addWordsAsync = createAsyncThunk(
  'learnWords/AddWord',
  async data => {
    try {
      const promises = data.map(word =>
        axios.post('/', word).then(resp => resp.data)
      );
      console.log(promises);
      const response = await Promise.all(promises);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchWords = createAsyncThunk(
  'learnWords/fetchWords',
  async signal => {
    try {
      const response = await axios.get('/', { signal });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteWord = createAsyncThunk(
  'learnWords/deleteWord',
  async deleteId => {
    try {
      const response = await axios.delete('/' + deleteId);
      return response.data.id;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateWord = createAsyncThunk(
  'learnWords/updateWord',
  async word => {
    try {
      const response = await axios.put(`/${word.id}`, word);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
