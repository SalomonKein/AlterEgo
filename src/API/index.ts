import axios from 'axios';
import { INews } from '../models/INews';

export async function getNews(news = 10) {
  const {data} = await axios.get<INews[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${news}`);
  return data;
}