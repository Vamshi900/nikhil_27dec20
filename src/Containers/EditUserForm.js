import React from 'react';
import UserDetails from './UserDetails';
import {
    selectUsers,
    updateUser
} from '../reducers/tableSlice';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';



const EditUserForm = ({ match }) => {
    const history = useHistory();
    const { params: { userId } } = match;
    console.log(userId);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const getUser = () => {
        return users.filter((user) => user.id == userId)[0]
    }

    const handleFormSubmit = (updatedUser) => {
        const index = users.findIndex((user) => user.id == userId)
        const updatedUsers = [...users];
        updatedUsers[index] = updatedUser;
        dispatch(updateUser(updatedUsers))
        history.push('/');
    }
    const currentUser = getUser();
    return currentUser ? <>
        <h2>Edit User</h2>
        <UserDetails initialValues={currentUser} handleFormSubmit={handleFormSubmit} />
    </> : 'user not found'


}

export default EditUserForm;