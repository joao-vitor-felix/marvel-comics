import { GlobalStyle } from "./GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/Navbar/Navbar";
import Home from "./routes/Home/Home";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
