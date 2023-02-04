import React from 'react';
import { connect } from 'react-redux';
import RecordTurn from '../components/RecordTurn';
import { click, remove, reset } from '../modules/recordgames';
import { Link } from 'react-router-dom';

const RecordTurnContainer = ({ url, turns, click, remove, reset }) => {
  console.log(turns);
  return (
    <div>
      <button>
        <Link to={`/simulation/${url}/add-turn`}>경기 추가</Link>
      </button>
      <button>
        <Link to={`/simulation/${url}/calculation`}>계산하기</Link>
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
