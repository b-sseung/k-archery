import { connect } from 'react-redux';
import { updateSheet } from '../modules/result';
// import { getSheetData } from '../api/Google';
import loadable from '@loadable/component';
import { useState } from 'react';
import GoogleSheetSelect from '../components/GoogleSheetSelect';

const ResultTable = loadable(() => import('../components/ResultTable'), {
  fallback: <div>loading...</div>,
});

const ResultContainer = ({ titles, sheet, updateSheet }) => {
  const [selectValue, setSelectValue] = useState(-1);

  const onChangeSelect = (e) => {
    updateSheet([]);
    setSelectValue(e.target.value);
    // getSheetData(titles[e.target.value]).then((res) => {
    //   updateSheet(res);
    // });
  };

  return (
    <div>
      <GoogleSheetSelect onChangeSelect={onChangeSelect}></GoogleSheetSelect>
      {sheet.length === 0 ? (
        selectValue === -1 ? (
          <div></div>
        ) : (
          <div>loading...</div>
        )
      ) : (
        <ResultTable values={sheet}></ResultTable>
      )}
    </div>
  );
};

export default connect(
  ({ result }) => ({
    titles: result.titles,
    sheet: result.sheet,
  }),
  { updateSheet },
)(ResultContainer);
