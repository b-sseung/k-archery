import { useParams } from 'react-router-dom';
import AddRecord from '../../containers/AddRecord';

const AddTurn = () => {
  const params = useParams();
  console.log(params.games);
  return (
    <div>
      {params.games === 'record' ? (
        <AddRecord></AddRecord>
      ) : (
        <div>추가하기</div>
      )}
    </div>
  );
};

export default AddTurn;
