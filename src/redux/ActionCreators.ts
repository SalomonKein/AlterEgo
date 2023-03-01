import { AppDispatch } from "./store";
import { newsSlice } from "./reducer/NewsSlice";
import { getData } from "../API";

export const fetchNews = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(newsSlice.actions.newsFetching());
    dispatch(newsSlice.actions.newsIsFetch());
    const response = await getData(page)
    dispatch(
      newsSlice.actions.addTotalCount(response.headers["x-total-count"])
    );
    dispatch(newsSlice.actions.newsFetchingSuccess(response.data));
  } catch (e) {
    dispatch(newsSlice.actions.newsFetchingError((e as Error).message));
  }
};

export const deleteNews = (id: number) => (dispatch: AppDispatch) => {
  dispatch(newsSlice.actions.newsDelete(id));
};

export const authStatus = () => (dispatch: AppDispatch) => {
  const data = JSON.parse(localStorage.getItem("isAuth") || "{}");
  dispatch(newsSlice.actions.authCheck(data));
};
