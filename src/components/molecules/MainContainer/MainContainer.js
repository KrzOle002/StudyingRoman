import Form from 'components/organisms/Form/Form';
import UserList from 'components/organisms/UserList/UserList';
import { Wrapper } from './MainContainer.styles';
import { Route, Switch } from "react-router-dom"
const MainContainer = ({ handleAddUser, handleInputChange, deleteUser, users, formValue }) => {
    return (
        <Wrapper>
            <Switch>
                <Route path="/add-users" exact>
                    <Form handleAddUser={handleAddUser} handleInputChange={handleInputChange} formValue={formValue} />
                </Route>
                <Route path="/" exact>
                    <UserList deleteUser={deleteUser} users={users} />
                </Route>
            </Switch>
        </Wrapper>
    )
}

export default MainContainer