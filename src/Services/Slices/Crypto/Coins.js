import { createSlice } from "@reduxjs/toolkit";

const CoinsSlice = createSlice({
    name: 'Coins',
    initialState: { },
    reducers: {
        setCoins(state, action) {
            state.coins = action.payload.data.coins;
        }
    }
});


export const CoinsAction = CoinsSlice.actions;

export default CoinsSlice;