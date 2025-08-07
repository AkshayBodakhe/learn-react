import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './services/UserService';
import { fetchUsers, fetchUserById } from './actions/userActions';
import { RootState } from './storeConfig';

interface UserState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  userDetailLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  userDetailLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = [];
      state.error = null;
    },
    clearSelectedUser: (state) => {
      state.selectedUser = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch Users
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to fetch users';
      });

    // Fetch User by ID
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.userDetailLoading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<User>) => {
        state.userDetailLoading = false;
        state.selectedUser = action.payload;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.userDetailLoading = false;
        state.error = action.payload as string || 'Failed to fetch user';
      });
  },
});

export const { clearUsers, clearSelectedUser, clearError } = userSlice.actions;

// Selectors
export const selectUsers = (state: RootState) => state.users.users;
export const selectSelectedUser = (state: RootState) => state.users.selectedUser;
export const selectUsersLoading = (state: RootState) => state.users.loading;
export const selectUserDetailLoading = (state: RootState) => state.users.userDetailLoading;
export const selectUsersError = (state: RootState) => state.users.error;

export default userSlice.reducer; 