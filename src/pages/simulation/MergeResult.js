import { useParams } from 'react-router-dom';
import TotalMatchContainer from '../../containers/TotalMatchContainer';

const MergeMatch = () => {
  const params = useParams();

  return (
    <div>
      {params.games === 'total-match' ? (
        <TotalMatchContainer></TotalMatchContainer>
      ) : (
        '배점 및 경기 계산'
      )}
    </div>
  );
};

export default MergeMatch;
