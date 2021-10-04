import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

// Creates a slice containing the data and allows for manipulation of said data through actions.
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        // Sets the origin of the ride
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        // Sets the destination of the ride
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        // Sets travel time for the ride and allows for realtime updates as the car is moving.
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    }
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors (one selector per state variable)
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;