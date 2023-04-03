import { Link } from 'react-router-dom';
import { dataSave } from '../matchResultFunction/common';
import TournamentMatch from '../components/tournament/TournamentMatch';

const TournamentContainer = ({
  url,
  results,
  state,
  data,
  click,
  remove,
  reset,
  modify,
}) => {
  dataSave('tournament', state);
  dataSave('mergeResult', results);

  return (
    <div>
      {url === 'matches' && (
        <button>
          <Link to={`/simulation/tournament/add-turn`}>경기 추가</Link>
        </button>
      )}
      <button>
        <Link to={`/simulation/tournament-${url}/match-result`}>계산하기</Link>
      </button>
      <button onClick={reset}>초기화</button>
      <TournamentMatch
        data={data}
        division={url}
        onVisible={click}
        onRemove={remove}
        modify={modify}
      ></TournamentMatch>
    </div>
  );
};

export default TournamentContainer;
