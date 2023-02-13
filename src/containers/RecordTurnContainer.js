import React from 'react';
import RecordTurn from '../components/record/RecordTurn';
import { Link } from 'react-router-dom';
import { dataSave } from '../matchResultFunction/record_PC';

const RecordTurnContainer = ({ url, state, turns, click, remove, reset }) => {
  dataSave(url, state);
  return (
    <div>
      <button>
        <Link to={`/simulation/${url}/add-turn`}>경기 추가</Link>
      </button>
      <button>
        <Link to={`/simulation/${url}/match-result`}>계산하기</Link>
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
