import { connect } from 'react-redux';
import {
  changeInput,
  changeSelect,
  insert,
  remove,
} from '../modules/recordgames';
import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddRecord = ({
  input,
  selectOption,
  turns,
  changeInput,
  changeSelect,
  insert,
  remove,
}) => {
  const [visibleArray, setVisibleArray] = useState([]);
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

  const tableCut = () => {
    let cutArray = input.split('\n');
    let result = [];
    for (let index = 0; index < cutArray.length; index++) {
      result.push(<div key={index}>{cutArray[index]}</div>);
    }
    setVisibleArray(result);
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
    insert(selectOption, input);
    // changeInput('');
    tableCut();
    // navigate('/simulation/record');
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
      {<div>{visibleArray}</div>}
    </div>
  );
};

export default connect(
  ({ recordgames }) => ({
    input: recordgames.input,
    selectOption: recordgames.selectOption,
    turns: recordgames.records,
  }),
  {
    changeInput,
    changeSelect,
    insert,
    remove,
  },
)(AddRecord);
