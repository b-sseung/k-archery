import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import TournamentContainer from '../../containers/TournamentContainer';
import {
  clickMatches,
  removeMatches,
  resetMatches,
  clickTurns,
  removeTurns,
  resetTurns,
} from '../../modules/tournament';

const TournamentDetails = ({
  results,
  state,
  matches,
  turns,
  clickMatches,
  removeMatches,
  resetMatches,
  clickTurns,
  removeTurns,
  resetTurns,
}) => {
  const params = useParams();
  return params.page === 'matches' ? (
    <TournamentContainer
      url={params.page}
      state={state}
      data={matches}
      results={results}
      click={clickMatches}
      remove={removeMatches}
      reset={resetMatches}
    ></TournamentContainer>
  ) : (
    <TournamentContainer
      url={params.page}
      state={state}
      data={turns}
      results={results}
      click={clickTurns}
      remove={removeTurns}
      reset={resetTurns}
    ></TournamentContainer>
  );
};

export default connect(
  ({ tournament, mergeResult }) => ({
    results: mergeResult,
    state: tournament,
    matches: tournament.matches,
    turns: tournament.turns,
  }),
  {
    clickMatches,
    removeMatches,
    resetMatches,
    clickTurns,
    removeTurns,
    resetTurns,
  },
)(TournamentDetails);
