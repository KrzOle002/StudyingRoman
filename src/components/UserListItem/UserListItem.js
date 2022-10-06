import React from 'react';
import PropTypes from 'prop-types';
const UserListItem = ({ userData: { average, name, attendance } }) => {
    return (
        <li>
            <div>{average}</div>
            <div>
                <p>{name}</p>
                <p>{attendance}</p>
            </div>
            <button>X</button>
        </li>
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