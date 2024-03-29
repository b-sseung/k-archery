import React from 'react';
import RecordTurn from '../components/record/RecordTurn';
import { Link } from 'react-router-dom';
import { dataSave } from '../matchResultFunction/common';

const RecordTurnContainer = ({
  url,
  results,
  state,
  turns,
  click,
  remove,
  reset,
}) => {
  dataSave(url, state);
  dataSave('mergeResult', results);
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
