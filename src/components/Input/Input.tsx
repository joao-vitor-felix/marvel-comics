import { FC, useEffect, useState } from "react";
import { Container, Input as DefaultInput } from "./Input.styles";
import SearchList from "../SearchList/SearchList";
import useComicsByName from "../../hooks/useComicsByName";

type InputProps = {
  id: string;
};

const Input: FC<InputProps> = ({ id }) => {
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState(search);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceSearch(search);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  const { data } = useComicsByName(debounceSearch);

  return (
    <Container>
      <DefaultInput
        type="text"
        placeholder="Search a comic"
        value={search}
        onChange={e => setSearch(e.target.value)}
        id={id}
      />
      {data && <SearchList comics={data} />}
    </Container>
  );
};

export default Input;
