import { useParams } from 'react-router-dom';
import RecordResultContainer from '../../containers/RecordResultContainer';

const MatchResult = () => {
  const params = useParams();

  return (
    <div>
      {params.games === 'record36' || params.games === 'record15' ? (
        <RecordResultContainer match={params.games}></RecordResultContainer>
      ) : (
        <div>계산하기</div>
      )}
    </div>
  );
};

export default MatchResult;
