import React from 'react';
import UserDetails from './UserDetails';
import {
    selectUsers,
    addUser
} from '../reducers/tableSlice';
import { useSelector, useDispatch } from 'react-redux';




const EditUserForm = ({ match }) => {
    const { params: { userId } } = match;
    console.log(userId);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const getUser = (userId) => {
        return users.filter((user) => user.id == userId)[0]
    }
    const currentUser = getUser(userId);
    console.log(currentUser);
    return currentUser ? <>
        <h2>Edit User</h2>
        <UserDetails initialValues={currentUser} handleFormSubmit={() => { }} />
    </> : 'user not found'


}

export default EditUserForm;