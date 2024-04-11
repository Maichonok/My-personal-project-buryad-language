import { BrowserRouter } from "react-router-dom";
import Header from "@components/Header/Header";
import Navigation from "@components/Navigation/Navigation";
import Content from "@components/Content/Content";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navigation />
        <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
