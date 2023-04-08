import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://randomuser.me/api/?results=5';

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(apiUrl);
    const users = response.data.results;
    return users;
  } catch (error) {
    return error;
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: undefined,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export { fetchUsers, usersSlice };























// import { createSlice, createAsyncThunk, rejectWithValue } from '@reduxjs/toolkit';
// import axios from 'axios';

// const apiUrl = 'https://randomuser.me/api/?results=5';

// const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//   try {
//    const response = await axios.get({apiUrl});
//      return response.data;
//   } catch (error) {
//      return rejectWithValue(response.data, [error]);
//   }
// });

// const usersSlice = createSlice({
//     name: 'users',
//     initialState: {
//       users: [],
//       isLoading: false,
//       error: undefined,
//     },
//    extraReducers: (builder) => {
//       builder
//       .addCase(fetchUsers.pending, (state)=> {
//         state.isLoading = true;
//         state.error = undefined;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.users = action.payload;
//       })
//       .addCase (fetchUsers.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//    },
// });

// export { fetchUsers };
// export default usersSlice;