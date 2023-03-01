import axios from "axios";
import { INews } from "../models/INews";



export const getData = (page:number) => axios.get<INews[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );