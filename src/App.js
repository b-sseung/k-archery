import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Simulation from './pages/Simulation';
import Record from './pages/simulation/Record';
import Tournament from './pages/simulation/Tournament';
import Leaguematch from './pages/simulation/Leaguematch';
import AddTurn from './pages/simulation/AddTurn';

const App = () => {
  console.log('새로고침');

  return (
    <div>
      {false ? <div>Header</div> : ''}
      <Routes exact={true}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
        <Route path="/simulation" element={<Simulation></Simulation>}></Route>
        <Route path="/simulation/record" element={<Record></Record>}></Route>
        <Route
          path="/simulation/tournament"
          element={<Tournament></Tournament>}
        ></Route>
        <Route
          path="/simulation/leaguematch"
          element={<Leaguematch></Leaguematch>}
        ></Route>
        <Route
          path="/simulation/:games/add-turn"
          element={<AddTurn></AddTurn>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
