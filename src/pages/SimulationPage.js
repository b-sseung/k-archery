import { useParams } from 'react-router-dom';
import Record15 from './simulation/Record15';
import Record36 from './simulation/Record36';
import Tournament from './simulation/Tournament';
import Leaguematch from './simulation/Leaguematch';

const SimulationPage = () => {
  const params = useParams();

  return (
    <div>
      {params.page === 'record36' ? (
        <Record36></Record36>
      ) : params.page === 'record15' ? (
        <Record15></Record15>
      ) : params.page === 'tournament' ? (
        <Tournament></Tournament>
      ) : (
        <Leaguematch></Leaguematch>
      )}
    </div>
  );
};

export default SimulationPage;
