import { connect } from 'react-redux';
import { click, remove, reset } from '../../modules/record36';

import RecordTurnContainer from '../../containers/RecordTurnContainer';
const Record36 = ({ turns, click, remove, reset }) => {
  return (
    <RecordTurnContainer
      url={'record36'}
      turns={turns}
      click={click}
      remove={remove}
      reset={reset}
    ></RecordTurnContainer>
  );
};

export default connect(
  ({ record36 }) => ({
    turns: record36.records,
  }),
  {
    click,
    remove,
    reset,
  },
)(Record36);
