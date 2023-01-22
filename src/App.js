import Header from "./components/Header";
import Cards from "./components/Cards";
import Addmovie from "./components/Addmovie";
import Detail from "./components/Detail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<Addmovie />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
