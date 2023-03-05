import { connect } from 'react-redux';
import {
  changeInput36,
  changeSelect36,
  insert36,
  remove36,
} from '../../modules/record36';
import {
  changeInput15,
  changeSelect15,
  insert15,
  remove15,
} from '../../modules/record15';
import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { addRecordData } from '../../matchResultFunction/record_PC';

const AddRecord = ({
  url,
  record36_input,
  record36_selectOption,
  record36_turns,
  record36_changeInput,
  record36_changeSelect,
  record36_insert,
  record36_remove,
  record15_input,
  record15_selectOption,
  record15_turns,
  record15_changeInput,
  record15_changeSelect,
  record15_insert,
  record15_remove,
}) => {
  const navigate = useNavigate();

  let input, selectOption, turns, changeInput, changeSelect, insert, remove;

  if (url === 'record36') {
    input = record36_input;
    selectOption = record36_selectOption;
    turns = record36_turns;
    changeInput = record36_changeInput;
    changeSelect = record36_changeSelect;
    insert = record36_insert;
    remove = record36_remove;
  } else {
    input = record15_input;
    selectOption = record15_selectOption;
    turns = record15_turns;
    changeInput = record15_changeInput;
    changeSelect = record15_changeSelect;
    insert = record15_insert;
    remove = record15_remove;
  }

  const selectOptionArray = [
    <option key={'0'} value={0}>
      선택
    </option>,
  ];

  for (let i = 1; i <= (url === 'record36' ? 8 : 5); i++) {
    selectOptionArray.push(
      <option key={i} value={i}>
        {i}회차
      </option>,
    );
  }

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

  const onChangeInput = (e) => {
    changeInput(e.target.value);
  };

  const onChangeSelect = (e) => {
    changeSelect(e.target.value);
  };

  return (
    <div>
      <form>
        <select defaultValue={selectOption} onChange={onChangeSelect}>
          {selectOptionArray}
        </select>
      </form>
      <form onSubmit={onSubmit}>
        <textarea
          placeholder="경기 결과를 입력해주세요."
          type="text"
          value={input}
          onChange={onChangeInput}
        ></textarea>
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  );
};

export default connect(
  ({ record36, record15 }) => ({
    record36_input: record36.input,
    record36_selectOption: record36.selectOption,
    record36_turns: record36.records,
    record15_input: record15.input,
    record15_selectOption: record15.selectOption,
    record15_turns: record15.records,
  }),
  {
    record36_changeInput: changeInput36,
    record36_changeSelect: changeSelect36,
    record36_insert: insert36,
    record36_remove: remove36,
    record15_changeInput: changeInput15,
    record15_changeSelect: changeSelect15,
    record15_insert: insert15,
    record15_remove: remove15,
  },
)(AddRecord);
