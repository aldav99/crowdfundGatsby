import React, { useContext } from 'react';
import AuthContext from './authContext';

export const UserInfo = () => {
    const value = React.useContext(AuthContext);

    return (
        <div align="right">
            <div>{value.firstName}</div>
            <div>{value.lastName}</div>
            <img src={value.avatarUrl} width="30"
                height="30" alt="User" />
        </div>
    );
};
