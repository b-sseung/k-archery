const TableHead = () => {
  const head = ['이름', '소속', '기록합계', '세트 수', '평균', '순위', '배점'];
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

const TableBody = ({ data }) => {
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

const TournamentMatchResultTable = ({ result }) => {
  return (
    <div>
      <table>
        <TableHead></TableHead>
        <tbody>
          {result.map((data, index) => {
            return <TableBody key={index} data={data[1]}></TableBody>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TournamentMatchResultTable;
