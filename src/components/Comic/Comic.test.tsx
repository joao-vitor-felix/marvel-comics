import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import FavoriteContextProvider from "../../contexts/FavoritesContext/FavoritesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Comic as ComicType } from "../../types/Comic";
import Comic from "./Comic";

describe("ComicDetails component", () => {
  it("should favorite a comic", () => {
    const queryClient = new QueryClient();

    const comics: ComicType[] = [
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
            <Comic
              title={comics[0].title}
              images={comics[0].images}
              id={comics[0].id}
              favorite={comics[0]}
            />
          </FavoriteContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );

    const favoriteButton = screen.getByLabelText(
      `Favoritar ${comics[0].title}`
    );
    fireEvent.click(favoriteButton);
    const unfavoriteButton = screen.getByLabelText(
      `Desfavoritar ${comics[0].title}`
    );
    expect(unfavoriteButton).toHaveStyle({ color: "red" });
  });
});
