import { useParams, useLocation } from 'react-router-dom';
import AddRecord36 from '../../containers/addGamesContainers/AddRecord36';

const AddTurn = () => {
  const params = useParams();
  return (
    <div>
      {params.games === 'record36' || params.games === 'tournament' ? (
        <AddRecord36 url={params.games}></AddRecord36>
      ) : params.games === 'record15' ? (
        <AddRecord36 url={params.games}></AddRecord36>
      ) : (
        <div>추가하기</div>
      )}
    </div>
  );
};

export default AddTurn;
