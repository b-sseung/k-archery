const RecordTHead = () => {
  const head = ['이름', '소속', '총점', '세트 수', '평균', '순위', '배점'];
  return (
    <thead>
      <tr>
        {head.map((value, index) => {
          return <th key={index}>{value}</th>;
        })}
      </tr>
    </thead>
  );
};

const RecordTBody = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.belong}</td>
      <td>{data.sumTotal}</td>
      <td>{data.shoot}</td>
      <td>{Math.round(data.ave * 100) / 100}</td>
      <td>{data.rank}</td>
      <td>{data.points}</td>
    </tr>
  );
};

const TournamentTurnTable = ({ datas }) => {
  const keys = Object.keys(datas);
  return (
    <table>
      <RecordTHead key={'head'}></RecordTHead>
      <tbody>
        {keys.map((key) => {
          const value = datas[key];
          return <RecordTBody key={key} data={value[1]}></RecordTBody>;
        })}
      </tbody>
    </table>
  );
};

export default TournamentTurnTable;
