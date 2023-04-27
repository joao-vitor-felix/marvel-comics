import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Searchbox from "./Searchbox";
import { BrowserRouter } from "react-router-dom";
import FavoriteContextProvider from "../../contexts/FavoritesContext/FavoritesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Searchbox", () => {
  it("renders Searchbox component", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FavoriteContextProvider>
            <Searchbox id="3" />
          </FavoriteContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(screen.getByPlaceholderText(/search a comic/i)).toBeInTheDocument();
  });
});
