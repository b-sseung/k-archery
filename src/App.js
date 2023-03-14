import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import SimulationHome from './pages/SimulationHome';
import AddTurn from './pages/simulation/AddTurn';
import MatchResult from './pages/simulation/MatchResult';
import SimulationDetails from './pages/SimulationDetails';
import MergeMatch from './pages/simulation/MergeResult';
import TournamentDetails from './pages/simulation/TournamentDetails';

const App = () => {
  return (
    <div>
      {false ? <div>Header</div> : ''}
      <Routes exact={true}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
        <Route
          path="/simulation"
          element={<SimulationHome></SimulationHome>}
        ></Route>
        <Route
          path="/simulation/:page"
          element={<SimulationDetails></SimulationDetails>}
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
        <Route
          path="/simulation/tournament/:page"
          element={<TournamentDetails></TournamentDetails>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
