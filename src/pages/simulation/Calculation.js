import { useParams } from 'react-router-dom';
import RecordCalculation from '../../containers/RecordCalculation';

const AddTurn = () => {
  const params = useParams();

  return (
    <div>
      {params.games === 'record' ? (
        <RecordCalculation></RecordCalculation>
      ) : (
        <div>계산하기</div>
      )}
    </div>
  );
};

export default AddTurn;
