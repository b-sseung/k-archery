const ResultTableItem = ({ data }) => {
  return (
    <tr>
      <td>{data[0]}</td>
      <td>{data[1]}</td>
      <td>{data[2]}</td>
    </tr>
  );
};

const ResultTable = ({ values }) => {
  const head = values[0];
  const body = values.slice(1);
  console.log(body);
  return (
    <table>
      <thead>
        <tr>
          <th>{head[0]}</th>
          <th>{head[1]}</th>
          <th>{head[2]}</th>
        </tr>
      </thead>
      <tbody>
        {body.map((value, index) => (
          <ResultTableItem key={index} data={value}></ResultTableItem>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
