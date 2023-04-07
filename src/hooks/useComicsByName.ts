import { useQuery } from "@tanstack/react-query";
import { fetchComicsByName } from "../api/api";
import { Comic } from "../types/Comic";

const useComicsByName = (title: string) => {
  const { data, isFetching, isError } = useQuery<Comic[], Error>({
    queryKey: ["comic", title],
    queryFn: () => fetchComicsByName(title),
    refetchOnWindowFocus: false
  });
  return { data, isFetching, isError };
};

export default useComicsByName;
