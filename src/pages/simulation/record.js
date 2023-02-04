import { useLocation } from 'react-router-dom';
import RecordTurnContainer from '../../containers/RecordTurnContainer';

const Record = ({ url }) => {
  return <RecordTurnContainer url={url}></RecordTurnContainer>;
};

export default Record;
