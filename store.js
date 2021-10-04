// Data wrapper for Rideshare React Native Mobile App using React-Redux
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice"; // Navigation slice is where the user stores their navigation data
export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});
