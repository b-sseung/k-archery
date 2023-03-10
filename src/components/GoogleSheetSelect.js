import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { changeGoogleInit, changeTitles, updateSheet } from '../modules/result';
import { GoogleInit, getSheetsTitle } from '../api/Google';

const GoogleSheetSelect = ({
  initState,
  titles,
  changeGoogleInit,
  changeTitles,
  onChangeSelect,
}) => {
  const location = useLocation();

  if (!initState) {
    GoogleInit().then((value) => {
      console.log(value);
      changeGoogleInit(value);
    });
  }

  if (initState && titles.length === 0) {
    getSheetsTitle().then((response) => {
      changeTitles(response);
    });
  }

  let resultOptions = [];
  resultOptions.push(
    <option key={-1} value={-1}>
      {titles.length === 0
        ? 'loading...'
        : location.pathname.indexOf('match-result') !== -1
        ? '없음'
        : '선택'}
    </option>,
  );

  for (let idx = titles.length - 1; idx >= 0; idx--) {
    resultOptions.push(
      <option key={idx} value={idx}>
        {titles[idx]}
      </option>,
    );
  }

  return (
    <form>
      <select defaultValue={'-1'} onChange={onChangeSelect}>
        {resultOptions}
      </select>
    </form>
  );
};

export default connect(
  ({ result }) => ({
    initState: result.googleInit,
    titles: result.titles,
  }),
  { changeGoogleInit, changeTitles, updateSheet },
)(GoogleSheetSelect);
