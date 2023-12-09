import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const authRegister = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', userData);
      setToken(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  '/auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', userData);
      setToken(data.token);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const authLogOut = createAsyncThunk(
  '/auth/logout',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.post('/users/logout');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const authRefresh = createAsyncThunk(
  '/auth/current',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.authStore.token;
      setToken(token);
      const { data } = await instance.get('/users/current');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.authStore.token;
      if (!token) return false;
      return true;
    },
  }
);
