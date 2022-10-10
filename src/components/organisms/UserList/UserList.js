import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, Wraper } from './UserList.style'

const UserList = () => {

    return (
        <Wraper>
            <StyledList>
                {users.map((userData, i) => (
                    <UserListItem index={i} userData={userData} key={userData.key} />
                ))}
            </StyledList>
        </Wraper>
    )
}

export default UserList