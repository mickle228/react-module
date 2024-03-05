import {configureStore} from "@reduxjs/toolkit";
import {carsReducer, triggerReducer, updateReducer} from "./slices";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        trigger: triggerReducer,
        update: updateReducer
    }
});

export {
    store
}