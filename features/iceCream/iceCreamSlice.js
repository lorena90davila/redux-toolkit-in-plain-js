const createSlice = require('@reduxjs/toolkit').createSlice;
const { cakeActions } = require('../cake/cakeSlice');

const initialState = {
  numIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numIceCreams--;
    },
    restocked: (state, action) => {
      state.numIceCreams += action.payload;
    },
  },
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numIceCreams--
  //   },
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
