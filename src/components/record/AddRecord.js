import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AddRecord = ({
  input,
  options,
  selectOption,
  onChangeInput,
  onChangeSelect,
  onSubmit,
}) => {
  return (
    <div>
      <form>
        <select defaultValue={selectOption} onChange={onChangeSelect}>
          {options}
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

export default AddRecord;
