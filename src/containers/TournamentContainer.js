import { connect } from 'react-redux';
import {
  changeInput,
  changeSelect,
  insertMatchs,
  clickMatchs,
  removeMatchs,
  resetMatchs,
} from '../modules/tournament';
const TournamentContainer = ({
  results,
  changeInput,
  changeSelect,
  insertMatchs,
  clickMatchs,
  removeMatchs,
  resetMatchs,
}) => {};

export default connect(({ tournament }) => ({ matchs: tournament.matchs }), {
  changeInput,
  changeSelect,
  insertMatchs,
  clickMatchs,
  removeMatchs,
  resetMatchs,
})(TournamentContainer);
