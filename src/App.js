import Header from "./components/Header";
import Cards from "./components/Cards";
import Addmovie from "./components/Addmovie";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
      </Routes>
      <Routes>
        <Route path="/addmovie" element={<Addmovie />} />
      </Routes>
    </div>
  );
}

export default App;
