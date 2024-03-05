import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    car: null
};

const updateSlice = createSlice({
    name: "updateSlice",
    initialState,
    reducers:{
        setCarForUpdate:(state, action)=> {
            state.car = action.payload;
        },
        reset:(state)=> {
            state.car = initialState.car;
        }
    }
})

const {reducer: updateReducer, actions} = updateSlice;

const updateActions = {
    ...actions
}

export {
    updateReducer,
    updateActions
}