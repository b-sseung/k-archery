const RecordTHead = () => {
  const head = ['이름', '소속', '총점', '화살 수', '10', 'X-10'];
  return (
    <thead>
      <tr>
        {head.map((value) => {
          return <th>{value}</th>;
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
      <td>{data.total}</td>
      <td>{data.hit}</td>
      <td>{data.ten}</td>
      <td>{data.xTen}</td>
    </tr>
  );
};

const RecordTurnTable = ({ datas }) => {
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

export default RecordTurnTable;
