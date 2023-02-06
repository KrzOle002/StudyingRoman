import Form from 'components/organisms/Form/Form';
import UserList from 'components/organisms/UserList/UserList';
import { Wrapper } from './MainContainer.styles';
import { Route, Switch } from "react-router-dom"
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
    )
}

export default MainContainer