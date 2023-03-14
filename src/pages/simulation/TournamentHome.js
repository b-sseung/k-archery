import { Link } from 'react-router-dom';

const TournamentHome = ({ results }) => {
  return (
    <div>
      <div>
        <Link to="./matches">매치 계산</Link>
      </div>
      <div>
        <Link to="./turns">회차 계산</Link>
      </div>
    </div>
  );
};

export default TournamentHome;
