import { useParams, useLocation } from 'react-router-dom';
import AddRecord36 from '../../containers/addGamesContainers/AddRecord36';
import AddRecord15 from '../../containers/addGamesContainers/AddRecord15';
import AddTournament from '../../containers/addGamesContainers/AddTournament';

const AddTurn = () => {
  const params = useParams();
  return (
    <div>
      {params.games === 'record36' ? (
        <AddRecord36 url={params.games}></AddRecord36>
      ) : params.games === 'record15' ? (
        <AddRecord15 url={params.games}></AddRecord15>
      ) : params.games === 'tournament' ? (
        <AddTournament url={`${params.games}/matches`}></AddTournament>
      ) : (
        <div>추가하기</div>
      )}
    </div>
  );
};

export default AddTurn;
