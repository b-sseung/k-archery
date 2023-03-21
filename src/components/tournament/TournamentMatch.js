import { MdRemoveCircleOutline } from 'react-icons/md';
import React from 'react';
import TournamentMatchTable from './TournamentMatchTable';
import TournamentTurnTable from './TournamentTurnTable';

const TournamentMatchItem = ({ match, division, onVisible, onRemove }) => {
  const { id } = match;

  return (
    <div className={`${id}`} onClick={() => onVisible(id)}>
      <div>{`${id} ${division === 'matches' ? '강' : ''}`}</div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

const TournamentMatch = ({ data, division, onVisible, onRemove }) => {
  data.sort((match1, match2) => {
    return match2.id - match1.id;
  });

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
