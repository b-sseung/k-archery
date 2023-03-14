import { Link } from 'react-router-dom';

const SimulationHome = () => {
  return (
    <div>
      <div>
        <Link to="./record36">기록(36발)</Link>
      </div>
      <div>
        <Link to="./record15">기록(15발)</Link>
      </div>
      <div>
        <Link to="./tournament">토너먼트</Link>
      </div>
      <div>
        <Link to="./leaguematch">리그전</Link>
      </div>
      <div>
        <Link to="./merge/total-match">배점 및 경기 계산</Link>
      </div>
    </div>
  );
};

export default SimulationHome;
