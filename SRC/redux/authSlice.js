import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setToken } =
  counterSlice.actions;

export default counterSlice.reducer;
