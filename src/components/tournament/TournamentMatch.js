import { MdRemoveCircleOutline, MdModeEdit } from 'react-icons/md';
import React from 'react';
import TournamentMatchTable from './TournamentMatchTable';
import TournamentTurnTable from './TournamentTurnTable';

const TournamentMatchItem = ({
  match,
  division,
  onVisible,
  onRemove,
  onModify,
}) => {
  const { id } = match;

  return (
    <div className={`${id}`} onClick={() => onVisible(id)}>
      <div>{`${id} ${division === 'matches' ? '강' : ''}`}</div>
      {division === 'turns' && (
        <div className="modify" onClick={() => onModify(id)}>
          <MdModeEdit />
        </div>
      )}
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

const TournamentMatch = ({ data, division, onVisible, onRemove, modify }) => {
  data.sort((match1, match2) => {
    return match2.id - match1.id;
  });

  const onModify = (preTitle) => {
    const newTitle = prompt('변경하실 이름을 입력해주세요.', preTitle);
    modify(preTitle, newTitle);
  };

  return (
    <div>
      <div>
        {data.map((match) => {
          return (
            <TournamentMatchItem
              key={match.id}
              division={division}
              match={match}
              onVisible={onVisible}
              onRemove={onRemove}
              onModify={onModify}
            ></TournamentMatchItem>
          );
        })}
      </div>
      {data.map((match) => {
        return match.visible ? (
          division === 'matches' ? (
            <TournamentMatchTable
              key={match.id}
              datas={match.text}
            ></TournamentMatchTable>
          ) : (
            <TournamentTurnTable
              key={match.id}
              datas={match.text}
            ></TournamentTurnTable>
          )
        ) : (
          ''
        );
      })}
    </div>
  );
};

export default TournamentMatch;
