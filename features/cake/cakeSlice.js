const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes-- //we do not have to explicitly return the new state and we can directly mutate the state in redux toolkit because it uses 'immer' under the hood
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        },
    },
});

module.exports = cakeSlice.reducer  //exporting as default
module.exports.cakeActions = cakeSlice.actions //named exports