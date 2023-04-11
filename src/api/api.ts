import axios from "axios";
import md5 from "md5";
import { Comic } from "../types/Comic";

const publicKey = import.meta.env.VITE_PUBLISH_KEY;
const privateKey = import.meta.env.MARVEL_SECRET_KEY;
const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

export type ComicData = {
  data: {
    data: {
      offset: number;
      limit: number;
      total: number;
      count: number;
      results: Comic[];
    };
  };
};

export const fetchComics = async (offset = "0"): Promise<ComicData> => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&offset=${offset}?ts=${time}&apikey=${publicKey}&hash=${hash}`
  );
  return response;
};

export const fetchComicsByName = async (
  title: string,
  offset = "0"
): Promise<Comic[]> => {
  if (title === "") return [];
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&offset=${offset}&title=${title}&apikey=${publicKey}&hash=${hash}`
  );
  return response.data.data.results;
};

export const fetchComicById = async (id: number): Promise<Comic[]> => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics/${id}?&apikey=${publicKey}&hash=${hash}`
  );
  return response.data.data.results;
};
