import { useParams, useLocation } from 'react-router-dom';
import AddRecord36 from '../../components/record/AddRecord36';

const AddTurn = () => {
  const params = useParams();

  return (
    <div>
      {params.games === 'record36' ? (
        <AddRecord36></AddRecord36>
      ) : (
        <div>추가하기</div>
      )}
    </div>
  );
};

export default AddTurn;
