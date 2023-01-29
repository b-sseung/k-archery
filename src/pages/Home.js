import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button>
        <Link to="/result">결과 검색</Link>
      </button>
      <button>
        <Link to="/simulation">모의 계산</Link>
      </button>
    </div>
  );
};

export default Home;
