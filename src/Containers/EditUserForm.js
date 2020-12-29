import React from 'react';
import UserDetails from './UserDetails';
import {
    selectUsers,
    updateUser
} from '../reducers/tableSlice';
import { useSelector, useDispatch } from 'react-redux';




const EditUserForm = ({ match }) => {
    const { params: { userId } } = match;
    console.log(userId);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const getUser = () => {
        return users.filter((user) => user.id == userId)[0]
    }
    const handleFormSubmit = (updateUser) => {
        console.log(updateUser);
        let currentUser = getUser()
        currentUser = { ...currentUser, ...updateUser }
        console.log(currentUser);
        const updatedUsers = [...users];

    }
    const currentUser = getUser();
    return currentUser ? <>
        <h2>Edit User</h2>
        <UserDetails initialValues={currentUser} handleFormSubmit={handleFormSubmit} />
    </> : 'user not found'


}

export default EditUserForm;