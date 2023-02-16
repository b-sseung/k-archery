import { connect } from 'react-redux';
import { useState } from 'react';
import GoogleSheetSelect from '../components/GoogleSheetSelect';
import { getSheetData } from '../api/Google';
import { updateSheet } from '../modules/result';
import { insert } from '../modules/totalResult';
import {
  getRanking,
  setPeopleMap,
  setPreRank,
} from '../matchResultFunction/record_PC';
import RecordResultTable from '../components/record/RecordResultTable';
//기록경기 계산
const RecordResultContainer = ({
  match,
  titles,
  sheet,
  record36,
  record15,
  updateSheet,
  insertTotalResult,
}) => {
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
      getSheetData(titles[e.target.value]).then((res) => {
        updateSheet(res);
      });
    }
    setTitle(e.target.value === '-1' ? '없음' : titles[e.target.value]);
  };

  const onClick = () => {
    let peoples = new Map();
    let datas = [];

    if (match === 'record36') {
      datas = record36;
    } else if (match === 'record15') {
      datas = record15;
    }

    setPeopleMap(datas, peoples);

    if (title !== '없음') {
      setPreRank(sheet, peoples);
    }

    const finalRank = getRanking(peoples, limit);

    setResult(finalRank);
  };

  const onSaveClick = () => {
    let name = prompt('결과를 구분하기 위해 이름을 입력해주세요.', '무제');
    insertTotalResult(name, result);
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
      <button onClick={onClick}>계산하기</button>
      {result.length > 0 && (
        <div>
          <button onClick={onSaveClick}>저장하기</button>
          <RecordResultTable result={result}></RecordResultTable>
        </div>
      )}
    </div>
  );
};

export default connect(
  ({ result, record36, record15 }) => ({
    titles: result.titles,
    sheet: result.sheet,
    record36: record36.records,
    record15: record15.records,
  }),
  { updateSheet, insertTotalResult: insert },
)(RecordResultContainer);
