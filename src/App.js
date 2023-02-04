import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Simulation from './pages/Simulation';
import AddTurn from './pages/simulation/AddTurn';
import Calculation from './pages/simulation/Calculation';
import SimulationPage from './pages/simulation/SimulationPage';

const App = () => {
  return (
    <div>
      {false ? <div>Header</div> : ''}
      <Routes exact={true}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
        <Route path="/simulation" element={<Simulation></Simulation>}></Route>
        <Route
          path="/simulation/:page"
          element={<SimulationPage></SimulationPage>}
        ></Route>
        <Route
          path="/simulation/:games/add-turn"
          element={<AddTurn></AddTurn>}
        ></Route>
        <Route
          path="/simulation/:games/calculation"
          element={<Calculation></Calculation>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
