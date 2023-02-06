import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, Wraper } from './UserList.style';



const UserList = ({ deleteUser, users }) => {

    return (
        <>
            <Wraper>
                <StyledList>
                    {users.map((userData) => (
                        <UserListItem deleteUser={deleteUser} userData={userData} key={userData.name} />
                    ))}
                </StyledList>
            </Wraper>
        </>
    )

}
export default UserList