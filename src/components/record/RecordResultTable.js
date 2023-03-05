const TableHead = () => {
  const head = [
    '이름',
    '소속',
    '기록합계',
    '10',
    'X-10',
    '순위',
    '배점',
    '평균',
  ];
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
      <td>{data.ten}</td>
      <td>{data.xTen}</td>
      <td>{data.rank}</td>
      <td>{data.points}</td>
      <td>{data.ave}</td>
    </tr>
  );
};

const RecordResultTable = ({ result }) => {
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

export default RecordResultTable;
