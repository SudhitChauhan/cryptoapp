import { configureStore } from '@reduxjs/toolkit'
import GlobalStateSlice from './Slices/GlobalState';
import CoinsSlice from './Slices/Coins';
import NewsSlice from './Slices/News';
import CoinDetailsSlice from './Slices/CoinDetailSlice';
import ExchangeSlice from './Slices/ExchangeSlice';
import MarketsSlice from './Slices/MarketsSlice';

const store = configureStore({
  reducer: {
    globalState : GlobalStateSlice.reducer,
    coins : CoinsSlice.reducer,
    news : NewsSlice.reducer,
    activeCoin : CoinDetailsSlice.reducer,
    exchange : ExchangeSlice.reducer,
    markets : MarketsSlice.reducer
  },
})

export default store;