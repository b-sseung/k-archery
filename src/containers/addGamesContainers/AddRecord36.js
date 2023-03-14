import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import AddRecord from '../../components/record/AddRecord';
import {
  changeInput,
  changeSelect,
  insert,
  remove,
} from '../../modules/record36';
import { addRecordData } from '../../matchResultFunction/record_PC';

const AddRecord36 = ({
  url,
  input,
  selectOption,
  turns,
  changeInput,
  changeSelect,
  insert,
  remove,
}) => {
  const navigate = useNavigate();

  const selectOptionArray = [
    <option key={'0'} value={0}>
      선택
    </option>,
  ];

  for (let i = 1; i <= 8; i++) {
    selectOptionArray.push(
      <option key={i} value={i}>
        {i}회차
      </option>,
    );
  }

  const onChangeInput = (e) => {
    changeInput(e.target.value);
  };

  const onChangeSelect = (e) => {
    changeSelect(e.target.value);
  };

  const onCheckTurn = () => {
    for (let turn of turns) {
      if (turn.id === selectOption) {
        return true;
      }
    }
    return false;
  };

  const onInsert = () => {
    addRecordData({ text: input, games: url }).then((result) => {
      console.log(result);
      insert(selectOption, result);
      changeInput('');
      changeSelect(0);
      navigate(`/simulation/${url}`);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (selectOption === '0') {
      alert('회차를 선택해주세요.');
      return;
    }
    if (onCheckTurn()) {
      if (!window.confirm('이미 등록된 회차입니다. 재등록하시겠습니까?')) {
        return;
      } else {
        remove(selectOption);
      }
    }
    onInsert();
  };

  return (
    <AddRecord
      options={selectOptionArray}
      input={input}
      selectOption={selectOption}
      onChangeInput={onChangeInput}
      onChangeSelect={onChangeSelect}
      onSubmit={onSubmit}
    ></AddRecord>
  );
};

export default connect(
  ({ record36 }) => ({
    input: record36.input,
    selectOption: record36.selectOption,
    turns: record36.records,
  }),
  {
    changeInput,
    changeSelect,
    insert,
    remove,
  },
)(AddRecord36);
