import { useQuery } from "@tanstack/react-query";
import { ComicData, fetchComics } from "../api/api";
import { Comic } from "../types/Comic";

const useComics = (offset: string) => {
  const { data, isFetching, isError } = useQuery<ComicData, Error>({
    queryKey: ["comics", offset],
    queryFn: () => fetchComics(offset),
    refetchOnWindowFocus: false
  });
  return { data, isFetching, isError };
};

export default useComics;
