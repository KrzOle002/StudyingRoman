import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from './UserList.style';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useContext } from 'react';
import { UsersContext } from 'providers/UsersProviders';

const UserList = () => {
    const { users } = useContext(UsersContext)
    return (
        <>
            <ViewWrapper>
                <StyledList>
                    {users.map((userData) => (
                        <UserListItem userData={userData} key={userData.name} />
                    ))}
                </StyledList>
            </ViewWrapper>
        </>
    )

}
export default UserList