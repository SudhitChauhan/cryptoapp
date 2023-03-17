import { createSlice } from "@reduxjs/toolkit";
import millify from 'millify';

const GlobalStateSlice = createSlice({
    name: 'GlobalState',
    initialState: {
        totalCoins: 0,
        totalMarkets: 0,
        totalExchanges: 0,
        total24hVolume: '',
        bestCoins: [],
        newestCoins: []
    },
    reducers: {
        setGlobalstate(state, action) {
            state.totalCoins = millify(action.payload.data.totalCoins);
            state.totalMarkets = millify(action.payload.data.totalMarkets);
            state.totalExchanges = millify(action.payload.data.totalExchanges);
            state.total24hVolume = millify(action.payload.data.total24hVolume);
            state.bestCoins = millify(action.payload.data.bestCoins);
            state.newestCoins = millify(action.payload.data.newestCoins);
        }
    }
});


export const GlobalStateAction = GlobalStateSlice.actions;

export default GlobalStateSlice;