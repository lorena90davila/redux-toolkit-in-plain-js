const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initialState = {
  loading: false,
  users: [],
  error: '',
};

// createAsyncThunk generates the actions for the diferent statuses
// of the async operation passed as a callback:
// pending, fullfilled and rejected action types
// example:
// {
//   type: 'users/fetchUsers/pending',
//   payload: undefined,
// }
// args: action type, async callback
const fetchUsers = createAsyncThunk('users/fetchUsers', () =>
  axios
    .get('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id))
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
