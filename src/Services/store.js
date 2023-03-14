import { configureStore } from '@reduxjs/toolkit'
import GlobalStateSlice from './Slices/GlobalState';
import CoinsSlice from './Slices/Coins';
import NewsSlice from './Slices/News';

const store = configureStore({
  reducer: {
    globalState : GlobalStateSlice.reducer,
    coins : CoinsSlice.reducer,
    news : NewsSlice.reducer,
  },
})

export default store;