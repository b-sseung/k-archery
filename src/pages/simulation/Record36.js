import { connect } from 'react-redux';
import { click36, remove36, reset36 } from '../../modules/record36';
import RecordTurnContainer from '../../containers/RecordTurnContainer';

const Record36 = ({ results, state, turns, click, remove, reset }) => {
  return (
    <RecordTurnContainer
      url={'record36'}
      results={results}
      state={state}
      turns={turns}
      click={click}
      remove={remove}
      reset={reset}
    ></RecordTurnContainer>
  );
};

export default connect(
  ({ record36 }) => ({
    state: record36,
    turns: record36.records,
  }),
  {
    click: click36,
    remove: remove36,
    reset: reset36,
  },
)(Record36);
