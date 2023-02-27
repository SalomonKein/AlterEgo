import {AppDispatch} from "../store";
import axios from "axios";
import {newsSlice} from "./NewsSlice";
import { getNews } from "../../API";
import { INews } from "../../models/INews";



export const fetchNews = (page:number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(newsSlice.actions.newsFetching())
            dispatch(newsSlice.actions.newsIsFetch())
            const response = await axios.get<INews[]>(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
            dispatch(newsSlice.actions.newsFetchingSuccess(response.data))
        } catch(e:any) {
            dispatch(newsSlice.actions.newsFetchingError(e.message))
        }
    }

    export const deleteNews = (id:number) => (dispatch: AppDispatch) => {
        dispatch(newsSlice.actions.newsDelete(id))
}
