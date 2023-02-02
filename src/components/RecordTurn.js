import { MdRemoveCircleOutline } from 'react-icons/md';
import React from 'react';

const RecordTurnItem = ({ turn, onRemove }) => {
  const { id, text } = turn;

  const onRead = () => {
    console.log(text);
  };

  return (
    <div className={`${id}`} onClick={() => onRead()}>
      <div>{`${id}회차`}</div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

const RecordTurn = ({ turns, onRemove }) => {
  console.log(turns);
  return (
    <div>
      {turns.map((turn) => {
        return (
          <RecordTurnItem
            key={turn.id}
            turn={turn}
            onRemove={onRemove}
          ></RecordTurnItem>
        );
      })}
    </div>
  );
};

export default RecordTurn;
