import axios from "axios";
import md5 from "md5";
import { Comic } from "../types/Comic";

const publicKey = import.meta.env.VITE_PUBLISH_KEY;
const privateKey = import.meta.env.MARVEL_SECRET_KEY;
const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

export const fetchComics = async (): Promise<Comic[]> => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic?&offset=200?ts=${time}&apikey=${publicKey}&hash=${hash}`
  );
  console.log(response.data.data.results);
  return response.data.data.results;
};

export const fetchComicsByName = async (title: string): Promise<Comic[]> => {
  if (title === "") return [];
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&title=${title}&apikey=${publicKey}&hash=${hash}`
  );
  console.log(response.data.data.results);
  return response.data.data.results;
};

export const fetchComicById = async (id: number): Promise<Comic[]> => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics/${id}?&apikey=${publicKey}&hash=${hash}`
  );
  console.log(response.data.data.results);
  return response.data.data.results;
};
