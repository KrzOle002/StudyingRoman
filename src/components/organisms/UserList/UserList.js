import UserListItem from "components/molecules/UserListItem/UserListItem.js";
import { StyledList } from "./UserList.style.js";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper.js";
import { useContext } from "react";
import { UsersContext } from "providers/UsersProviders.js";

const UserList = () => {
  const { users } = useContext(UsersContext);
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
  );
};
export default UserList;
