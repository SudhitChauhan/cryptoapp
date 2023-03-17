import { createSlice } from "@reduxjs/toolkit";

const ExchangeSlice = createSlice({
    name: 'Exchnage',
    initialState: { },
    reducers: {
        setExchanges(state, action) {
            state.exchanges = action.payload.data.exchanges;
        }
    }
});


export const ExchnageAction = ExchangeSlice.actions;

export default ExchangeSlice;