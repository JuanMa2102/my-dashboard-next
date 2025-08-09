import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    count: number;
    isReady: boolean
}

const initialState: CounterState = {
    count: 5,
    isReady: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>){
        if( state.isReady) return;
        state.count = action.payload;
        state.isReady = true;
    },
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

export const { addOne, removeOne, reset, initCounterState} = counterSlice.actions;

export default counterSlice.reducer;