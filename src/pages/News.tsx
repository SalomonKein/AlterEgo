import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../API";
import NewsItem from "../components/NewsItem";
import { useAppDispatch, useAppSelector } from "../hooks";
import { deleteNews, fetchNews } from "../redux/reducer/ActionCreators";

export default function News() {
  const { news, isLoading, error, isFetch } = useAppSelector(
    (state) => state.newsReducer
  );
  const [curentPage, setCurentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [fetching, setFetching] = useState(isFetch)
  const dispatch = useAppDispatch();



  useEffect(() => {
    if(fetching){
    dispatch(fetchNews(curentPage))
    .finally(()=>setFetching(false));
 } }, [fetching]);

  const onClickHadlerFetch = () => {
    setCurentPage(prevState=>prevState+1)
    setFetching(true)
  } 
  const onClickHadlerDelete = (id:number) => {
    dispatch(deleteNews(id))
  } 

  console.log(news, 'news')

  return (
    <Container>
      {news.map((item) => (
        <NewsItem key={item.id} post={item} delPost={onClickHadlerDelete} />
      ))}
      <Button variant="outlined"  onClick={onClickHadlerFetch}>Add more news</Button>
    </Container>
  );
}
function newsDelete(id: number) {
  throw new Error("Function not implemented.");
}

