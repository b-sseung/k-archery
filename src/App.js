import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Simulation from "./pages/Simulation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/result" element={<Result></Result>}></Route>
      <Route path="/simulation" element={<Simulation></Simulation>}></Route>
    </Routes>
  );
};

export default App;
