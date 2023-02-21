import Form from "components/organisms/Form/Form.js";
import UserList from "components/organisms/UserList/UserList.js";
import { Wrapper } from "./MainContainer.styles.js";
import { Route, Switch } from "react-router-dom";
const MainContainer = () => {
  return (
    <Wrapper>
      <Switch>
        <Route path="/add-users" exact>
          <Form />
        </Route>
        <Route path="/" exact>
          <UserList />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default MainContainer;
