import ButtonToTop from "../../components/ButtonToTop/ButtonToTop";
import ComicList from "../../components/ComicList/ComicList";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Marvel Comics");
  return (
    <>
      <ImageSlider />
      <ComicList />
      <ButtonToTop />
    </>
  );
};

export default Home;
