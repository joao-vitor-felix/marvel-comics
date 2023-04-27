import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ComicSearchList from "./ComicSearchList";
import { BrowserRouter } from "react-router-dom";
import FavoriteContextProvider from "../../contexts/FavoritesContext/FavoritesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Comic } from "../../types/Comic";
import Searchbox from "../Searchbox/Searchbox";

describe("ComicSearchList component", () => {
  it("should display the comic when got the response", () => {
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
            <ComicSearchList comics={comics} search="" />
          </FavoriteContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );

    const batmanComic = screen.getByText(/gotham city sirens/i);
    const seeMore = screen.getByText(/see more.../i);
    expect(batmanComic).toBeInTheDocument();
    expect(seeMore).toBeInTheDocument();
  });

  it("should display the message not found when got no response and the searchbox it's filled in", () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FavoriteContextProvider>
            <ComicSearchList comics={[]} search="trying to find a comic" />
          </FavoriteContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );

    const message = screen.getByText(/no comics found./i);
    expect(message).toBeInTheDocument();
  });

  it("should not display the message when got no response and the searchbox it's empty", async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FavoriteContextProvider>
            <Searchbox id="1" />
            <ComicSearchList comics={[]} search="testing" />
          </FavoriteContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );

    const searchInput = screen.getByRole("searchbox");
    const message = screen.queryByText(/no comics found./i);
    expect(message).toBeInTheDocument();

    fireEvent.change(searchInput, {
      target: { value: "" }
    });

    await waitFor(() => {
      setTimeout(() => {
        expect(message).not.toBeInTheDocument();
      }, 500);
    });
  });
});
