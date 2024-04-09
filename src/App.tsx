import { BrowserRouter } from "react-router-dom";
import Header from "@components/Header/Header";
import Navigation from "@components/Navigation/Navigation";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
