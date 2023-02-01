import React from 'react';
import { connect } from 'react-redux';
import RecordTurn from '../components/RecordTurn';
import { remove, reset } from '../modules/recordgames';
import { Link } from 'react-router-dom';

const RecordTurnContainer = ({ turns, remove, reset }) => {
  return (
    <div>
      <button>
        <Link to={'/simulation/record/add-turn'}>경기 추가</Link>
      </button>
      <button onClick={reset}>초기화</button>
      <RecordTurn turns={turns} onRemove={remove}></RecordTurn>
    </div>
  );
};

export default connect(
  ({ recordgames }) => ({
    turns: recordgames.records,
  }),
  {
    remove,
    reset,
  },
)(RecordTurnContainer);
