import React from 'react';
import { useHistory } from 'react-router-dom';
import Table from './CustomTable';

const Home = () => {
    const history = useHistory();
    const handleClick = () => history.push('/newuser');

    return (
        <>
            <h2>Home Page</h2>
            <button type="button" onClick={handleClick}>Add User </button>
            <Table />
        </>
    );
};

export default Home;
