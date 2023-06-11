import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Home Page</h2>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </>
  );
};

export default Home;
