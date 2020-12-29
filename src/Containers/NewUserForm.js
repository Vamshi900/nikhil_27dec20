import React from 'react';
import UserDetails from './UserDetails';
import { useHistory } from 'react-router-dom';
import {
    selectUsers,
    addUser
} from '../reducers/tableSlice';
import { useSelector, useDispatch } from 'react-redux'


export const initialValues = {
    email: '',
    name: '',
    gender: 'select',
    locations: '',
    phone:''
};

const NewUserForm = () => {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFormSubmit = (newUser) => {
        const id = users.length + 1;
        newUser.id = id;
        const updatedUsers = [...users];
        updatedUsers.push(newUser)
        dispatch(addUser(updatedUsers));
        history.push('/');
    }
    return <>
        <h2>Add User</h2>
        <UserDetails initialValues={initialValues} handleFormSubmit={handleFormSubmit} />
    </>
}

export default NewUserForm;