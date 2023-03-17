import { configureStore } from '@reduxjs/toolkit'
import GlobalStateSlice from './Slices/Crypto/GlobalState';
import CoinsSlice from './Slices/Crypto/Coins';
import NewsSlice from './Slices/Crypto/News';
import CoinDetailsSlice from './Slices/Crypto/CoinDetailSlice';
import ExchangeSlice from './Slices/Crypto/ExchangeSlice';
import MarketsSlice from './Slices/Crypto/MarketsSlice';

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