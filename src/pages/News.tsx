import { Button, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import { useAppDispatch, useAppSelector } from "../hooks";
import { deleteNews, fetchNews } from "../redux/reducer/ActionCreators";

export default function News() {
  const { news, totalCount, error, isFetch } = useAppSelector(
    (state) => state.newsReducer
  );
  const [curentPage, setCurentPage] = useState(1);
  const [fetching, setFetching] = useState(isFetch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fetching && news.length < totalCount) {
      dispatch(fetchNews(curentPage));
    }
    if (error) {
      console.log(error);
    }
    setFetching(false);
  }, [fetching]);

  const onClickHadlerFetch = () => {
    setCurentPage((prevState) => prevState + 1);
    setFetching(true);
  };
  const onClickHadlerDelete = (id: number) => {
    dispatch(deleteNews(id));
  };

  return (
    <Container>
      <Grid item
                container
                sx={{
                  marginInline: "auto",
                }}>
        {news.map((item) => (
          <NewsItem key={item.id} post={item} delPost={onClickHadlerDelete} />
        ))}
        <Button
          variant="outlined"
          sx={{
            mb: 2,
            marginInline: "auto",
          }}
          onClick={onClickHadlerFetch}
        >
          Add more news
        </Button>
      </Grid>
    </Container>
  );
}
