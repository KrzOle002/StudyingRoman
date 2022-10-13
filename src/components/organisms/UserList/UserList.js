import React, { useEffect, useState } from 'react';
import { users as usersData } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, Wraper } from './UserList.style'
import FormField from 'components/molecules/FormField/FormField';
import { AddButton } from 'components/atoms/AddButton/AddButton';

const UserList = () => {

    const [users, setUsers] = useState(usersData);
    const [formValue, setFormValue] = useState({
        name: '',
        attendance: '',
        average: '',
    });

    useEffect(() => {
        console.log("Hello Wiadomosc")
    }, []);


    const deleteUser = (name) => {
        const filteredUsers = users.filter(user => user.name !== name)
        setUsers(filteredUsers);
    }

    const handleInputChange = (e) => {
        console.log('dupa')
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,

        });

    };


    const handleAddUser = (e) => {
        e.preventDefault();
        const newUser = {
            name: formValue.name,
            attendance: formValue.attendance,
            average: formValue.average,
        }

        setUsers([
            newUser, ...users
        ])
    };

    return (
        <>
            <Wraper as="form" onSubmit={handleAddUser}>
                <h1>Add new Student</h1>
                <FormField label="Name" id="name" name="name" value={formValue.name} onChange={handleInputChange} />
                <FormField label="Attendance" id="attendance" name="attendance" value={formValue.attendance} onChange={handleInputChange} />
                <FormField label="Average" id="average" name="average" value={formValue.average} onChange={handleInputChange} />
                <AddButton type="submit">Add</AddButton>
            </Wraper>
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