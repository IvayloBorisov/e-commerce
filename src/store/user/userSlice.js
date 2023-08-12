import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "../thunks/user/addUser";
import { fetchUsers } from "../thunks/user/fetchUsers";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        })
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
});

export const userReducer = userSlice.reducer;

