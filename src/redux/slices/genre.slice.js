import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";


const initialState = {
    genres:[],
    errors:null
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectedWithValue})=>{
        try {
            const {data} = await genreService.getAll();
            console.log(data);  /////////
            return data;
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const genreSlice = createSlice({
   name: 'genreSlice',
   initialState,
   reducers:{ },
   extraReducers:(builder)=>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null;
                state.genres = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
            })
});

const {reducer:genreReducer} = genreSlice;

const genreActions = {
    getAll
}

export {
    genreReducer,
    genreActions
}