import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wraper, StyledAverage, StyledInfo } from './UserListItem.style';


const UserListItem = ({ deleteUser, userData: { average, name, attendance } }) => {
    return (
        <Wraper>
            <StyledAverage checkAverage={average}>
                {average}
            </StyledAverage>
            <StyledInfo>
                <p>{name}</p>
                <p>attendance: {attendance}</p>
            </StyledInfo>
            <Button onClick={() => deleteUser(name)} />
        </Wraper>
    )
}

UserListItem.propType = {
    userData: PropTypes.shape({
        average: PropTypes.string,
        name: PropTypes.string,
        attendance: PropTypes.string,
    })
}
export default UserListItem