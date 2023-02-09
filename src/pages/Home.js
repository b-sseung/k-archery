import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/result">결과 검색</Link>
      </div>
      <div>
        <Link to="/simulation">모의 계산</Link>
      </div>
    </div>
  );
};

export default Home;
