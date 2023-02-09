import { connect } from 'react-redux';
import { changeGoogleInit, changeTitles, updateSheet } from '../modules/result';
import { getSheetData, getSheetsName, googleInit } from '../api/Google';
import loadable from '@loadable/component';
import { useState } from 'react';

const ResultTable = loadable(() => import('../components/ResultTable'), {
  fallback: <div>loading...</div>,
});

const ResultContainer = ({
  initState,
  titles,
  sheets,
  changeGoogleInit,
  changeTitles,
  updateSheet,
}) => {
  const [selectValue, setSelectValue] = useState(-1);

  if (!initState) {
    googleInit().then((value) => {
      changeGoogleInit(value);
    });
  }

  if (initState && titles.length === 0) {
    getSheetsName().then((response) => {
      changeTitles(response);
    });
  }

  let resultOptions = [];
  resultOptions.push(
    <option key={-1} value={-1}>
      선택
    </option>,
  );

  for (let idx = titles.length - 1; idx >= 0; idx--) {
    resultOptions.push(
      <option key={idx} value={idx}>
        {titles[idx]}
      </option>,
    );
  }

  const onChangeSelect = (e) => {
    updateSheet([]);
    setSelectValue(e.target.value);
    getSheetData(titles[e.target.value]).then((res) => {
      updateSheet(res);
    });
  };

  return (
    <div>
      <form>
        <select defaultValue={-1} onChange={onChangeSelect}>
          {resultOptions}
        </select>
      </form>
      {sheets.length === 0 ? (
        selectValue === -1 ? (
          <div></div>
        ) : (
          <div>loading...</div>
        )
      ) : (
        <ResultTable values={sheets}></ResultTable>
      )}
    </div>
  );
};

export default connect(
  ({ result }) => ({
    initState: result.googleInit,
    titles: result.titles,
    sheets: result.sheetsData,
  }),
  { changeGoogleInit, changeTitles, updateSheet },
)(ResultContainer);
