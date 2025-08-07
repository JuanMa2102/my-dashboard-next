import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 5
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne(state){
        state.count += 1;
    },
    removeOne(state){
        if(state.count > 0)
            state.count -= 1;
    },
    reset(state, action: PayloadAction<number>){
        if(action.payload >= 0)
            state.count = action.payload;
        else
            state.count = 0;
    },

  }
});

export const { addOne, removeOne, reset} = counterSlice.actions;

export default counterSlice.reducer;