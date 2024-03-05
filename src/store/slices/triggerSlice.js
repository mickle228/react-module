import {createSlice} from "@reduxjs/toolkit";

let initialState = false;

const triggerSlice = createSlice({
    name: "triggerSlice",
    initialState,
    reducers:{
        changeTrigger: state => !state
    }
})

const {reducer: triggerReducer, actions} = triggerSlice;

const triggerActions = {
    ...actions
}

export {
    triggerReducer,
    triggerActions
}