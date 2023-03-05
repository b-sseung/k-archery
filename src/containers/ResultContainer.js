import { connect } from 'react-redux';
import { updateSheet } from '../modules/result';
import loadable from '@loadable/component';
import { useState } from 'react';
import GoogleSheetSelect from '../components/GoogleSheetSelect';
import { getSheetData } from '../api/Google';

const ResultTable = loadable(() => import('../components/ResultTable'), {
  fallback: <div>loading...</div>,
});

const ResultContainer = ({ titles, sheet, updateSheet }) => {
  const [selectValue, setSelectValue] = useState(-1);

  const onChangeSelect = (e) => {
    updateSheet([]);
    setSelectValue(e.target.value);

    if (e.target.value === '-1') return;

    getSheetData(titles[e.target.value]).then((result) => {
      updateSheet(result);
    });
  };

  return (
    <div>
      <GoogleSheetSelect onChangeSelect={onChangeSelect}></GoogleSheetSelect>
      {sheet.length === 0 ? (
        selectValue === '-1' ? (
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
