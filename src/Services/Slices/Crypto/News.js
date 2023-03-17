import { createSlice } from "@reduxjs/toolkit";

const NewsSlice = createSlice({
    name: 'News',
    initialState: { articles : null },
    reducers: {
        setNews(state, action) {
            state.articles = action.payload.value;
        }
    }
});


export const NewsAction = NewsSlice.actions;

export default NewsSlice;