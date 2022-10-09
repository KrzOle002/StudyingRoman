import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import styled from 'styled-components';

const Wraper = styled.div`
    background-color: white;
    width: 100%;
    max-width: 500px;
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0,0,0,0.3);
`;

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const UserList = () => {

    return (
        <Wraper>
            <StyledList>
                {users.map((userData, key) => (
                    <UserListItem userData={userData} key={key} />
                ))}
            </StyledList>
        </Wraper>
    )
}

export default UserList