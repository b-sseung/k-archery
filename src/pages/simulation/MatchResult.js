import { useParams } from 'react-router-dom';
import RecordResultContainer from '../../containers/RecordResultContainer';
import TournamentMatchResultContainer from '../../containers/TournamentMatchResultContainer';

const MatchResult = () => {
  const params = useParams();

  return params.games === 'record36' || params.games === 'record15' ? (
    <RecordResultContainer match={params.games}></RecordResultContainer>
  ) : params.games === 'tournament-matches' ? (
    <TournamentMatchResultContainer
      url={'matches'}
    ></TournamentMatchResultContainer>
  ) : (
    <div>계산하기</div>
  );
};

export default MatchResult;
