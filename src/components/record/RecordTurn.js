import { MdRemoveCircleOutline } from 'react-icons/md';
import React from 'react';
import RecordTurnTable from './RecordTurnTable';

const RecordTurnItem = ({ turn, onVisible, onRemove }) => {
  const { id } = turn;

  return (
    <div className={`${id}`} onClick={() => onVisible(id)}>
      <div>{`${id}회차`}</div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

const RecordTurn = ({ turns, onVisible, onRemove }) => {
  turns.sort((t1, t2) => {
    return t1.id - t2.id;
  });

  return (
    <div>
      <div>
        {turns.map((turn) => {
          return (
            <RecordTurnItem
              key={turn.id}
              turn={turn}
              onVisible={onVisible}
              onRemove={onRemove}
            ></RecordTurnItem>
          );
        })}
      </div>
      {turns.map((turn) => {
        return turn.visible ? (
          <RecordTurnTable key={turn.id} datas={turn.text}></RecordTurnTable>
        ) : (
          ''
        );
      })}
    </div>
  );
};

export default RecordTurn;
