import React from 'react';
import './styles/table.scss';
import { columns } from '../utils/constants';
import {
    selectUsers,
    removeUser
} from '../reducers/tableSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Row = ({ id, name, phone, email, gender, locations, remove }) => {
    const history = useHistory();
    const handleClick = (id) => history.push(`/editUser/${id}`);
    return <div className="row" id={id}>

        <div>{name}</div>
        <div>{phone}</div>
        <div>{email}</div>
        <div>{gender}</div>
        <div>{locations}</div>
        <div className="remove">
            <a href="#" onClick={() => handleClick(id)}>Edit</a>
        </div>
        <div className="remove">
            <a href="#" onClick={() => remove(id)}>X</a>
        </div>
    </div>
};



const getHeader = (columns) => {
    const data = columns.map((column) => {
        return <div id={column.name}>{column.displayName}</div>
    })
    return data;
}

const getRows = (rows, remove) => {
    return rows ? rows.map((rowData) => <Row remove={remove} {...rowData} />) : [];
}


const Table = (props) => {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    const remove = (rowId) => {
        const arrayCopy = users.filter((row) => row.id !== rowId);
        dispatch(removeUser(arrayCopy));
    };

    return (users ?
        <>
            <h3>Count : {users.length}</h3>
            <div className="table">
                <div className="header">
                    {getHeader(columns)}

                    <div className="remove">
                    </div>
                    <div className="remove"></div>
                </div>
                <div className="body">
                    {getRows(users, remove)}
                </div>
            </div> </> : <h2> Loading... </h2>

    );

}
export default Table;

