import {createSlice, configureStore} from '@redux/toolkit';

const initialState = {counter: 0, showCounter: true};

/*
With redux toolkit you use createSlice to create a section of state to
be managed with redux.   You have to give it a name and an initial state.
You define an object of reducer functions for manipulating the state.
WITH redux toolkit ONLY, you don't have to return new objects, you can just
adjust the state directly.   A sample format is shown below.
*/
const counterSlicke = createSlice({
    name: 'counter',
    initialState: initialState,              // or just initialState
    reducers: {
        increment(state) {
            state.counter ++;
        },
        decrement(state) {
            state.counter --;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const counterReducer = (state=initialState, action) => {
    if (action.type==='increment') {
        return {
            counter: state.counter+1,
            showCounter: state.showCounter
        }
    }

    if (action.type==='increase') {
        // We use action to hold the payload used within redux.
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type==='decrement') {
        return {
            counter: state.counter-1,
            showCounter: state.showCounter
        }
    }

    if (action.type==='toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state
}

const store = configureStore({
    reducer: counterReducer.reducer
});

export default store;