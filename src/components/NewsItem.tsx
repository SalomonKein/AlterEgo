import React from "react";

import { Button, Container, Grid, Typography } from "@mui/material";
import { INews } from "../models/INews";

export default function NewsItem({ post, delPost } : { post: INews, delPost: any }) {
  return (
    <Container>
      <Grid container>
        <Grid item border={"solid blue 1px"} borderRadius={2} m={2}>
          <Typography variant="h5" align="center" component="h1" gutterBottom>
            {post.title}
          </Typography>
          <Typography p={1} m={1} border={"solid grey 1px"} borderRadius={2}>
            {post.body}
          </Typography>
          <Button variant="outlined" color="error" sx={{ m: 1 }} onClick={() => delPost(post.id)}>
            Delete
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
