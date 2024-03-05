import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars:[]
}

const carsSlice = createSlice({
    name: "carsSlice",
    initialState,
    reducers:{
        setResponse:(state, action)=> {
            state.cars = action.payload;
        }
    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carsReducer,
    carsActions
}