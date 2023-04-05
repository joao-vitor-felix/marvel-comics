import { useQuery } from "@tanstack/react-query";
import { fetchComicById } from "../api/api";
import { Comic } from "../types/Comic";

const useComic = (id: number) => {
  const { data, isFetching, isError } = useQuery<Comic[], Error>({
    queryKey: ["comic", id],
    queryFn: () => fetchComicById(id),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  });
  return { data, isFetching, isError };
};

export default useComic;
