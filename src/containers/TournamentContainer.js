import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  changeInput,
  changeSelect,
  insertMatches,
  clickMatches,
  removeMatches,
  resetMatches,
  insertTurns,
  clickTurns,
  removeTurns,
  resetTurns,
} from '../modules/tournament';

const TournamentContainer = ({
  page,
  results,
  matches,
  turns,
  changeInput,
  changeSelect,
  insertMatches,
  clickMatches,
  removeMatches,
  resetMatches,
  insertTurns,
  clickTurns,
  removeTurns,
  resetTurns,
}) => {
  let datas, insert, click, remove, reset;

  if (page === 'matches') {
    datas = matches;
    insert = insertMatches;
    click = clickMatches;
    remove = removeMatches;
    reset = resetMatches;
  } else {
    datas = turns;
    insert = insertTurns;
    click = clickTurns;
    remove = removeTurns;
    reset = resetTurns;
  }

  return (
    <div>
      {page === 'matches' && (
        <button>
          <Link to={`/simulation/tournament/add-turn`}>경기 추가</Link>
        </button>
      )}
      <button>
        <Link to={`/simulation/tournament-${page}/match-result`}>계산하기</Link>
      </button>
      <button onClick={page === 'matches' ? resetMatches : resetTurns}>
        초기화
      </button>
    </div>
  );
};

export default connect(
  ({ tournament, mergeResult }) => ({
    results: mergeResult.results,
    matches: tournament.matches,
    turns: tournament.turns,
  }),
  {
    changeInput,
    changeSelect,
    insertMatches,
    clickMatches,
    removeMatches,
    resetMatches,
    insertTurns,
    clickTurns,
    removeTurns,
    resetTurns,
  },
)(TournamentContainer);
