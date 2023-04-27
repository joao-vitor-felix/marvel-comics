import ButtonToTop from "../../components/ButtonToTop/ButtonToTop";
import ComicList from "../../components/ComicList/ComicList";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Marvel Comics");
  return (
    <>
      <ComicList />
      <ButtonToTop />
    </>
  );
};

export default Home;
