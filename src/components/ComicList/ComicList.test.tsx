import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import FavoriteContextProvider from "../../contexts/FavoritesContext/FavoritesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ComicList from "./ComicList";

describe("ComicSearchList component", () => {
  it("should be disabled and color grey", () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FavoriteContextProvider>
            <ComicList />
          </FavoriteContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );

    const previousButton = screen.getByText("Previous");
    expect(previousButton).toBeDisabled();
    expect(previousButton).toHaveStyle({ backgroundColor: "grey" });
  });
});
