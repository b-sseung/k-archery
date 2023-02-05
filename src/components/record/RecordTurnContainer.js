import React from 'react';
import RecordTurn from './RecordTurn';
import { Link } from 'react-router-dom';

const RecordTurnContainer = ({ url, turns, click, remove, reset }) => {
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

export default RecordTurnContainer;
