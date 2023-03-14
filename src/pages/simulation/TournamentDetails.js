import { useParams } from 'react-router-dom';
import TournamentContainer from '../../containers/TournamentContainer';

const TournamentDetails = () => {
  const params = useParams();

  return <TournamentContainer page={params.page}></TournamentContainer>;
};

export default TournamentDetails;
