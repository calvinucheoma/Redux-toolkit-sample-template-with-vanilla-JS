const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: '',
};

// createAsyncThunk generates pending, fulfilled and rejected action types but the reducers are not generated by the slice and have to be added as extra reducers
const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
   return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map((user) => user.id))
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload,
            state.error = ''
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message
        })
    }
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;