import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinksStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav className='primary-nav'>
      <NavLink style={navLinksStyle} to='/'>
        Home
      </NavLink>
      <NavLink style={navLinksStyle} to='/about'>
        About
      </NavLink>
      <NavLink style={navLinksStyle} to='/products'>
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
