import {INews} from "../../models/INews";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchNews} from "./ActionCreators";

interface NewsState {
    news: INews[];
    isLoading: boolean;
    error: string;
    isFetch: boolean;
}

const initialState: NewsState = {
    news: [],
    isLoading: false,
    error: '',
    isFetch: true,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        newsFetching(state) {
            state.isLoading = true;
        },
       newsFetchingSuccess(state, action: PayloadAction<INews[]>){
            state.isLoading = false;
            state.error = '';
            state.news.push(...action.payload) ;
        },
        newsFetchingError (state,  action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        newsDelete(state, action: PayloadAction<number>){
            state.news = state.news.filter((news) => news.id !== action.payload)
        },
        newsIsFetch(state) {
            state.isFetch = false;
        },

    }
})

export default newsSlice.reducer;