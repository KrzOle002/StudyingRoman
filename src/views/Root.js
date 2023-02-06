import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { users as usersData } from 'data/users';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from 'components/molecules/Navbar/Navbar';
import MainContainer from 'components/molecules/MainContainer/MainContainer';

const Wraper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey} ;
  display: flex;
  flex-direction: row;
  width: 100% ;
  height: 100vh;
`;

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};
const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValue, setFormValue] = useState(initialFormState);

  useEffect(() => {
    console.log("Hello Wiadomosc")
  }, []);


  const deleteUser = (name) => {
    const filteredUsers = users.filter(user => user.name !== name)
    setUsers(filteredUsers);
  }

  const handleInputChange = (e) => {
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

    setUsers([newUser, ...users])
    setFormValue(initialFormState)
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wraper>
          <Navbar />
          <MainContainer handleAddUser={handleAddUser} handleInputChange={handleInputChange} formValue={formValue} deleteUser={deleteUser} users={users} />
        </Wraper>
      </ThemeProvider >
    </Router>
  )
}

export default Root

