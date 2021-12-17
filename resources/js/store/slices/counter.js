import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => { state.value += 1; },
        decrement: (state) => { state.value -= 1; },
        incrementByAmount: (state, { payload }) => { state.value = payload; },
    }
});

counterSlice.actions.upload = () => {
    return async (dispatch, getState) => {};
};

counterSlice.selectors = {
    getCount: ({ counter }) => counter.value,
};

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
export default counterSlice;
