import { Link } from "react-router-dom";

const Simulation = () => {
  return (
    <div>
      <div>
        <Link to="./record">기록(15발)</Link>
      </div>
      <div>
        <Link to="./tournament">토너먼트</Link>
      </div>
      <div>
        <Link to="./leaguematch">리그전</Link>
      </div>
    </div>
  );
};

export default Simulation;
