import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: true};

/*
With redux toolkit you use createSlice to create a section of state to
be managed with redux.   You have to give it a name and an initial state.
You define an object of reducer functions for manipulating the state.
WITH redux toolkit ONLY, you don't have to return new objects, you can just
adjust the state directly.   A sample format is shown below.
*/
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,              // or just initialState
    reducers: {
        increment(state) {
            state.counter ++;
        },
        decrement(state) {
            state.counter --;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;