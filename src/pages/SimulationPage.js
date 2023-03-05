import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Record15 from './simulation/Record15';
import Record36 from './simulation/Record36';
import Tournament from './simulation/Tournament';
import Leaguematch from './simulation/Leaguematch';

const SimulationPage = (results) => {
  const params = useParams();

  return (
    <div>
      {params.page === 'record36' ? (
        <Record36 results={results}></Record36>
      ) : params.page === 'record15' ? (
        <Record15 results={results}></Record15>
      ) : params.page === 'tournament' ? (
        <Tournament results={results}></Tournament>
      ) : (
        <Leaguematch results={results}></Leaguematch>
      )}
    </div>
  );
};

export default connect(
  ({ mergeResult }) => ({
    results: mergeResult.results,
  }),
  {},
)(SimulationPage);
