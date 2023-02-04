import { useParams } from 'react-router-dom';
import Record from './Record';
import Tournament from './Tournament';
import Leaguematch from './Leaguematch';

const SimulationPage = () => {
  const params = useParams();

  return (
    <div>
      {params.page === 'record36' || params.page === 'record15' ? (
        <Record url={params.page}></Record>
      ) : params.page === 'tournament' ? (
        <Tournament></Tournament>
      ) : (
        <Leaguematch></Leaguematch>
      )}
    </div>
  );
};

export default SimulationPage;
