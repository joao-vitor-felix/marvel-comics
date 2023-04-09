import { useParams } from "react-router-dom";
import ComicDetails from "../../components/ComicDetails/ComicDetails";
import useComicById from "../../hooks/useComicById";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ButtonToTop from "../../components/ButtonToTop/ButtonTopTop";

const Details = () => {
  const { id } = useParams();
  const { data } = useComicById(Number(id));

  const title = data && data[0].title;
  useDocumentTitle(`${title} | Marvel Comics`);

  return (
    <>
      {data &&
        data.map(comic => (
          <ComicDetails
            title={comic.title}
            variantDescription={comic.variantDescription}
            description={comic.description}
            pageCount={comic.pageCount}
            format={comic.format}
            images={comic.images}
            key={comic.id}
            id={comic.id}
            creators={comic.creators}
            characters={comic.characters}
            favorite={comic}
          />
        ))}
      <ButtonToTop />
    </>
  );
};

export default Details;
