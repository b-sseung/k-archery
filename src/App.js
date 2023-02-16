import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Simulation from './pages/Simulation';
import AddTurn from './pages/simulation/AddTurn';
import MatchResult from './pages/simulation/MatchResult';
import SimulationPage from './pages/SimulationPage';
import MergeMatch from './pages/simulation/MergeResult';

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
          path="/simulation/:games/match-result"
          element={<MatchResult></MatchResult>}
        ></Route>
        <Route
          path="/simulation/merge/:games"
          element={<MergeMatch></MergeMatch>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
