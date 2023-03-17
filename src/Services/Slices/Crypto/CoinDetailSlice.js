import { createSlice } from "@reduxjs/toolkit";

const CoinDetailsSlice = createSlice({
    name: 'CoinDetail',
    initialState: { },
    reducers: {
        setCoins(state, action) {
            state.coin = action.payload.data.coin;
        }
    }
});


export const CoinDetailsAction = CoinDetailsSlice.actions;

export default CoinDetailsSlice;