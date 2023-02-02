import React from 'react';
import { connect } from 'react-redux';
import RecordTurn from '../components/RecordTurn';
import { click, remove, reset } from '../modules/recordgames';
import { Link } from 'react-router-dom';

const RecordTurnContainer = ({ turns, click, remove, reset }) => {
  return (
    <div>
      <button>
        <Link to={'/simulation/record/add-turn'}>경기 추가</Link>
      </button>
      <button onClick={reset}>초기화</button>
      <RecordTurn
        turns={turns}
        onVisible={click}
        onRemove={remove}
      ></RecordTurn>
    </div>
  );
};

export default connect(
  ({ recordgames }) => ({
    turns: recordgames.records,
  }),
  {
    click,
    remove,
    reset,
  },
)(RecordTurnContainer);
