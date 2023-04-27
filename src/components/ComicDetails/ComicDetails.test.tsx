import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import FavoriteContextProvider from "../../contexts/FavoritesContext/FavoritesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Comic } from "../../types/Comic";
import ComicDetails from "./ComicDetails";

describe("ComicDetails component", () => {
  it("should favorite a comic", () => {
    const queryClient = new QueryClient();

    const comics: Comic[] = [
      {
        id: 4,
        title: "Gotham City Sirens",
        description: "This is a description",
        variantDescription: "",
        format: "Comic",
        pageCount: 20,
        images: [
          {
            path: "www.google.com",
            extension: "www.google.com"
          }
        ],
        creators: {
          items: [
            {
              name: "John Doe",
              resourceURI: "www.google.com",
              role: "writer"
            }
          ]
        },
        characters: {
          items: [
            {
              name: "Batman",
              resourceURI: "www.google.com"
            }
          ]
        }
      }
    ];

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FavoriteContextProvider>
            <ComicDetails
              title={comics[0].title}
              description={comics[0].description}
              pageCount={comics[0].pageCount}
              format={comics[0].format}
              images={comics[0].images}
              id={comics[0].id}
              creators={comics[0].creators}
              characters={comics[0].characters}
              favorite={comics[0]}
            />
          </FavoriteContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );

    const favoriteButton = screen.getByText(/favorite/i);
    fireEvent.click(favoriteButton);
    const unfavoriteButton = screen.getByText(/unfavorite/i);
  });
});
