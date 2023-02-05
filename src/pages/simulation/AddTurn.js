import { useParams, useLocation } from 'react-router-dom';
import AddRecord from '../../components/record/AddRecord';

const AddTurn = () => {
  const params = useParams();

  return (
    <div>
      {params.games === 'record36' ? (
        <AddRecord></AddRecord>
      ) : (
        <div>추가하기</div>
      )}
    </div>
  );
};

export default AddTurn;
