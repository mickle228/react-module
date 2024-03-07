import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    episodeName: null,
    error: null
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setEpisodeName: (state, action) => {
            state.episodeName = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {prev, next}, results} = action.payload
                state.episodes = results
                state.prevPage = prev
                state.nextPage = next
                state.error = null
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.error = action.payload.error
                console.log(action.payload.error)
            })
})


const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAll
}

export {
    episodesReducer,
    episodesActions
}