import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk('user/add', async(user) => {

        const response = await axios.post('http://localhost:3001/users', {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    });

    return response.data
});

export { addUser };
