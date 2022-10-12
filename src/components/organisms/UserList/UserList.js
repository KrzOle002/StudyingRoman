import React, { useEffect, useState } from 'react';
import { users as usersData } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, Wraper } from './UserList.style'

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoadingState] = useState([]);
    //komentarz

    const deleteUser = (name) => {
        const filteredUsers = users.filter(user => user.name !== name)
        setUsers(filteredUsers);
    }

    return (
        <Wraper>
            <StyledList>
                {users.map((userData) => (
                    <UserListItem deleteUser={this.deleteUser} userData={userData} key={userData.key} />
                ))}
            </StyledList>
        </Wraper>
    )

}
export default UserList