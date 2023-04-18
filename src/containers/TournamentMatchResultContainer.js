import { connect } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleSheetSelect from '../components/GoogleSheetSelect';
import { updateSheet } from '../modules/result';
import { insert } from '../modules/mergeResult';
import { insertTurns } from '../modules/tournament';
import TournamentMatchResultTable from '../components/tournament/TournamentMatchResultTable';
import { getSheetData } from '../api/Google';

const TournamentMatchResultContainer = ({
  url,
  titles,
  sheet,
  matches,
  turns,
  updateSheet,
  insertTotalResult,
  insertTurns,
}) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('없음');
  const [limit, setLimit] = useState(
    document.querySelector('input') ? document.querySelector('input').value : 0,
  );
  const [result, setResult] = useState([]);

  const onChangeInput = (e) => {
    setLimit(e.target.value);
  };

  const onChangeSelect = (e) => {
    if (e.target.value === '-1') {
      updateSheet([]);
    } else {
      getSheetData(titles[e.target.value]).then((result) => {
        updateSheet(result);
      });
    }
    setTitle(e.target.value === '-1' ? '없음' : titles[e.target.value]);
  };

  const onClickMatches = () => {
    import('../matchResultFunction/tournamentMatches').then(
      ({
        getRanking,
        setGroupAverRank,
        setGroupRanking,
        setMatchRanking,
        setPeopleMap,
        setPreRank,
      }) => {
        const peoples = new Map();

        setPeopleMap(matches, peoples);

        if (title !== '없음') {
          setPreRank(sheet, peoples);
        }

        const groups = [];

        peoples.forEach((people) => {
          if (!groups[people['team']]) {
            groups[people['team']] = [];
          }

          groups[people['team']].push(people);
        });

        setMatchRanking(peoples, groups);
        setGroupAverRank(peoples, groups);
        setGroupRanking(peoples, groups);

        const finalRank = getRanking(peoples, limit);
        setResult(finalRank);
      },
    );
  };

  const onClickTurns = () => {
    import('../matchResultFunction/tournamentMatches').then(
      ({ getRanking, setPeopleMap, setPreRank }) => {
        const peoples = new Map();

        setPeopleMap(turns, peoples);

        if (title !== '없음') {
          setPreRank(sheet, peoples);
        }

        const finalRank = getRanking(peoples, limit);
        setResult(finalRank);
      },
    );
  };

  const onSaveClick = () => {
    let name = prompt('결과를 구분하기 위해 이름을 입력해주세요.', '무제');
    console.log(result);
    if (url === 'turns') insertTotalResult(name, result);
    if (url === 'matches') insertTurns(name, result);
    navigate(`/simulation/tournament/${url}`);
  };

  return (
    <div>
      <div>
        <div>선발인원은 몇 명입니까?</div>
        <input type="number" onChange={onChangeInput}></input>
      </div>
      <div>
        <div>동점일 경우 비교할 이전 순위를 선택해주세요.</div>
        <GoogleSheetSelect onChangeSelect={onChangeSelect}></GoogleSheetSelect>
        {/* <p>※ 슛-오프로 구분할 경우 없음을 선택 후 임의로 수정해주시길 바랍니다.</p>       */}
      </div>
      <button onClick={url === 'matches' ? onClickMatches : onClickTurns}>
        계산하기
      </button>
      {result.length > 0 && (
        <div>
          <button onClick={onSaveClick}>저장하기</button>
          {url === 'matches' ? (
            <TournamentMatchResultTable
              result={result}
            ></TournamentMatchResultTable>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
};

export default connect(
  ({ result, tournament, mergeResult }) => ({
    titles: result.titles,
    sheet: result.sheet,
    matches: tournament.matches,
    turns: tournament.turns,
    results: mergeResult.results,
  }),
  { updateSheet, insertTotalResult: insert, insertTurns },
)(TournamentMatchResultContainer);
