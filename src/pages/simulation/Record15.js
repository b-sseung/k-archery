import { connect } from 'react-redux';
import { click15, remove15, reset15 } from '../../modules/record15';
import RecordTurnContainer from '../../containers/RecordTurnContainer';

const Record15 = ({ state, turns, click, remove, reset }) => {
  return (
    <RecordTurnContainer
      url={'record15'}
      state={state}
      turns={turns}
      click={click}
      remove={remove}
      reset={reset}
    ></RecordTurnContainer>
  );
};

export default connect(
  ({ record15 }) => ({
    state: record15,
    turns: record15.records,
  }),
  {
    click: click15,
    remove: remove15,
    reset: reset15,
  },
)(Record15);
