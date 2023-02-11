import { connect } from 'react-redux';
import { useState } from 'react';
import GoogleSheetSelect from '../components/GoogleSheetSelect';
import { getSheetData } from '../api/Google';
import { updateSheet } from '../modules/result';
import {
  getRanking,
  setPeopleMap,
  setPreRank,
} from '../matchResultFunction/record_PC';
//기록경기 계산
const RecordResultContainer = ({
  match,
  titles,
  sheet,
  record36,
  updateSheet,
}) => {
  const [title, setTitle] = useState('없음');

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
    }

    setPeopleMap(datas, peoples);

    console.log(title);
    if (title !== '없음') {
      setPreRank(sheet, peoples);
    }

    const finalRank = getRanking(peoples);
  };

  return (
    <div>
      <div>동점일 경우 비교할 이전 순위를 선택해주세요.</div>
      <GoogleSheetSelect onChangeSelect={onChangeSelect}></GoogleSheetSelect>
      {/* <p>※ 슛-오프로 구분할 경우 없음을 선택 후 임의로 수정해주시길 바랍니다.</p>       */}
      <button onClick={onClick}>계산하기</button>
    </div>
  );
};

export default connect(
  ({ result, record36 }) => ({
    titles: result.titles,
    sheet: result.sheet,
    record36: record36.records,
  }),
  { updateSheet },
)(RecordResultContainer);
