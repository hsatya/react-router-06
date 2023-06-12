import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <>
      <h1>Users Page</h1>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      {showActiveUsers ? (
        <h2>Showing Active users</h2>
      ) : (
        <h2>Showing All users</h2>
      )}
      <ul>
        <li>
          <Link to='1'>User 1</Link>
        </li>
        <li>
          <Link to='2'>User 2</Link>
        </li>
        <li>
          <Link to='3'>User 3</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Users;
