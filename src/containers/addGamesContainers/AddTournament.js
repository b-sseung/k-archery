import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import AddGames from '../../components/AddGames';
import {
  changeInput,
  changeSelect,
  insertMatches,
  removeMatches,
} from '../../modules/tournament';
import { addTournamentMatchesDataPC } from '../../matchResultFunction/tournamentMatches';

const AddTournament = ({
  url,
  input,
  selectOption,
  matches,
  changeInput,
  changeSelect,
  insertMatches,
  removeMatches,
}) => {
  const navigate = useNavigate();

  const selectOptionArray = [
    <option key={'0'} value={0}>
      선택
    </option>,
  ];

  for (let i = 8; i >= 2; i /= 2) {
    selectOptionArray.push(
      <option key={i} value={i}>
        {i}강
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
    for (let match of matches) {
      if (match.id === selectOption) {
        return true;
      }
    }
    return false;
  };

  const onInsert = () => {
    addTournamentMatchesDataPC({ text: input, games: url }).then((result) => {
      console.log(result);
      insertMatches(selectOption, result);
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
        removeMatches(selectOption);
      }
    }
    onInsert();
  };

  return (
    <AddGames
      options={selectOptionArray}
      input={input}
      selectOption={selectOption}
      onChangeInput={onChangeInput}
      onChangeSelect={onChangeSelect}
      onSubmit={onSubmit}
    ></AddGames>
  );
};

export default connect(
  ({ tournament }) => ({
    input: tournament.input,
    selectOption: tournament.selectOption,
    matches: tournament.matches,
  }),
  {
    changeInput,
    changeSelect,
    insertMatches,
    removeMatches,
  },
)(AddTournament);
