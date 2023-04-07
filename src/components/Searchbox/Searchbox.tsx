import { FC, useEffect, useState } from "react";
import { Container, Input } from "./Searchbox.styles";
import useComicsByName from "../../hooks/useComicsByName";
import ComicSearchList from "../ComicSearchList/ComicSearchList";
import { useLocation } from "react-router-dom";

type SearchboxProps = {
  id: string;
};

const Searchbox: FC<SearchboxProps> = ({ id }) => {
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState(search);

  const location = useLocation();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceSearch(search);
    }, 400);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  useEffect(() => {
    setSearch("");
  }, [location]);

  const { data } = useComicsByName(debounceSearch);

  return (
    <Container>
      <Input
        type="search"
        placeholder="Search a comic"
        value={search}
        onChange={e => setSearch(e.target.value)}
        id={id}
      />
      {data && <ComicSearchList comics={data} search={debounceSearch} />}
    </Container>
  );
};

export default Searchbox;
