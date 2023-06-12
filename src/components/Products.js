import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  const navLinksStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <>
      <div>
        <input type='search' placeholder='Search Products' />
      </div>
      <nav>
        <NavLink style={navLinksStyle} to='all'>
          All
        </NavLink>
        <NavLink style={navLinksStyle} to='featured'>
          Featured
        </NavLink>
        <NavLink style={navLinksStyle} to='new'>
          New
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
