import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
        }
    }
});

authSlice.actions.loadAuth = () => {
    return async (dispatch, getState) => {
        const res = await axios.get('/user/current');
        console.log(res);
        dispatch(authActions.setUser(res));
    };
};

authSlice.selectors = {
    isGuest: ({ auth }) => !!auth?.email
};

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authSlice;
