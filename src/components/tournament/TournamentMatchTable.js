const RecordTHead = () => {
  const head = ['이름', '소속', '조', '총점', '세트 수', '승패'];
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
      <td>{data.team}</td>
      <td>{data.total}</td>
      <td>{data.shoot}</td>
      <td>{data.result}</td>
    </tr>
  );
};

const TournamentMatchTable = ({ datas }) => {
  const keys = Object.keys(datas);
  return (
    <table>
      <RecordTHead key={'head'}></RecordTHead>
      <tbody>
        {keys.map((key) => {
          const value = datas[key];
          return <RecordTBody key={key} data={value}></RecordTBody>;
        })}
      </tbody>
    </table>
  );
};

export default TournamentMatchTable;
