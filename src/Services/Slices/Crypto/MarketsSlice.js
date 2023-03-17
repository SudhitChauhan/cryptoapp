import { createSlice } from "@reduxjs/toolkit";

const MarketsSlice = createSlice({
    name: 'Markets',
    initialState: { },
    reducers: {
        setMarkets(state, action) {
            state.markets = action.payload.data.markets;
        }
    }
});


export const MarketsAction = MarketsSlice.actions;

export default MarketsSlice;