import Header from "./components/Header";
import Cards from "./components/Cards";
import Addmovie from "./components/Addmovie";
import Detail from "./components/Detail";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { createContext } from "react";
import { useState } from "react";

const Appstate = createContext();

function App() {
  const [signin, setSignin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{ signin, userName, setSignin, setUserName }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/addmovie" element={<Addmovie />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Appstate.Provider>
  );
}

export default App;
export { Appstate };
