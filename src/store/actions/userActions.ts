import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../services/UserService';

// Async thunk for fetching all users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const users = await UserService.getUsers();
      return users;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch users');
    }
  }
);

// Async thunk for fetching a single user by ID
export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id: number, { rejectWithValue }) => {
    try {
      const user = await UserService.getUserById(id);
      return user;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : `Failed to fetch user ${id}`);
    }
  }
); 