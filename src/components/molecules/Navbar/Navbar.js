import { NavLink } from "react-router-dom";
import { NavSection, Wrapper } from "./Navbar.styles.js";

const Navbar = () => {
  return (
    <Wrapper>
      <NavSection>
        <NavLink to="/" exact>
          Home Page
        </NavLink>
        <NavLink to="/add-users" exact>
          Add User
        </NavLink>
        <NavLink to="/settings" exact>
          Settings
        </NavLink>
        <NavLink to="/logout" exact>
          Logout
        </NavLink>
      </NavSection>
    </Wrapper>
  );
};

export default Navbar;
