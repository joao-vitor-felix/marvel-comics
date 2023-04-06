import ComicList from "../../components/ComicList/ComicList";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Container } from "./Home.styles";

const Home = () => {
  useDocumentTitle("Marvel Comics");
  return (
    <Container>
      <ComicList />
    </Container>
  );
};

export default Home;
