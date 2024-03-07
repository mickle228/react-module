import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    charactersOfEpisode: [],
    error: null
};

const getAll = createAsyncThunk(
    'charactersSlice/getAll',
    async ({ids}, thunkAPI) =>{
        try {
            const {data} = await characterService.getByIds(ids);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.charactersOfEpisode = action.payload
                state.error = null
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.error = action.payload.error
                console.log(action.payload.error)
            })
});

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions,
    getAll
};

export {
    charactersReducer,
    charactersActions
};
