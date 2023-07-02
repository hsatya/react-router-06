import { NavLink } from "react-router-dom";
import { useAuth } from "./utils/auth";

const Navbar = () => {
  const navLinksStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();

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
      <NavLink style={navLinksStyle} to='/users'>
        Users
      </NavLink>
      <NavLink style={navLinksStyle} to='/profile'>
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinksStyle} to='/login'>
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
