import { connect } from 'react-redux';
import { changeInput, insert } from '../modules/recordgames';
import { MdAdd } from 'react-icons/md';

const AddRecord = ({ input, turns, changeInput, insert }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    insert(input);
    changeInput('');
  };

  const onChangeInput = (e) => {
    changeInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="경기 결과를 입력해주세요."
        type="text"
        value={input}
        onChange={onChangeInput}
      ></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default connect(
  ({ recordgames }) => ({
    input: recordgames.input,
    turns: recordgames.records,
  }),
  {
    changeInput,
    insert,
  },
)(AddRecord);
