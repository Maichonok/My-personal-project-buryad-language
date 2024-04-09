import { BrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Home />
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
