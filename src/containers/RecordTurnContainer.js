import React from 'react';
import { connect } from 'react-redux';
import RecordTurn from '../components/RecordTurn';
import { changeInput, insert, remove, reset } from '../modules/recordgames';

const RecordTurnContainer = ({
  input,
  turns,
  changeInput,
  insert,
  remove,
  reset,
}) => {
  return (
    <div>
      <button>경기 추가</button>
      <button onClick={reset}>초기화</button>
      <RecordTurn turns={turns} onRemove={remove}></RecordTurn>
    </div>
  );
};

export default connect(
  ({ recordgames }) => ({
    input: recordgames.input,
    turns: recordgames.turns,
  }),
  {
    changeInput,
    insert,
    remove,
    reset,
  },
)(RecordTurnContainer);
