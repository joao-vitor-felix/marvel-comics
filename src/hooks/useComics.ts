import { useQuery } from "@tanstack/react-query";
import { fetchComics } from "../api/api";
import { Comic } from "../types/Comic";

const useComics = () => {
  const { data, isFetching, isError } = useQuery<Comic[], Error>({
    queryKey: ["comics"],
    queryFn: fetchComics,
    keepPreviousData: true,
    refetchOnWindowFocus: false
  });
  return { data, isFetching, isError };
};

export default useComics;
