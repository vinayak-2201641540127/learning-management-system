const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
    user: null,
    isAuthenitcated: false,
};

// userLoggedIn({name: 'vinayak'})

const authSLice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        userLoggedIn: (state, action) =>{
            state.user = action.payload.user;
        }, 
    },
});

