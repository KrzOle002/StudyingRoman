import { NavLink } from "react-router-dom";
import { NavSection, Wrapper } from "./Navbar.styles.js";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <NavSection>
        <NavLink to="/" exact>
          <FontenedWords>Home Page</FontenedWords>
        </NavLink>
        <NavLink to="/add-users" exact>
          <FontenedWords>Add User</FontenedWords>
        </NavLink>
        <NavLink to="/settings" exact>
          <FontenedWords>Settings</FontenedWords>
        </NavLink>
        <NavLink to="/logout" exact>
          <FontenedWords>Logout</FontenedWords>
        </NavLink>
      </NavSection>
    </Wrapper>
  );
};

const FontenedWords = styled.div`
  font-family: Arial;
  font-weight: 700;
`;
export default Navbar;
