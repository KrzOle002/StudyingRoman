import Navbar from "components/molecules/Navbar/Navbar.js";
import SearchBar from "components/organisms/SearchBar/SearchBar.js";
import NewsSection from "./../NewsSection/NewsSection.js";
import { Wrapper } from "./MainTemplate.style.js";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <SearchBar />
      <Navbar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
