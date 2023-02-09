import { connect } from 'react-redux';
import {
  changeInput,
  changeSelect,
  insert,
  remove,
} from '../../modules/record36';
import { MdAdd } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  dataSave,
  record36People_PC,
} from '../../caculationFunction/record_PC';

const AddRecord = ({
  state,
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

  const onCheckTurn = () => {
    for (let turn of turns) {
      if (turn.id === selectOption) {
        return true;
      }
    }
    return false;
  };

  const onInsert = () => {
    record36People_PC({ text: input }).then((result) => {
      console.log(result);
      insert(selectOption, result);
      changeInput('');
      navigate('/simulation/record36');
      dataSave('record36', state);
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
  ({ record36 }) => ({
    state: record36,
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
)(AddRecord);