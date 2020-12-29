import React from 'react';
import './styles/table.scss';
import { columns } from '../utils/constants';
import {
    selectUsers,
    removeUser
} from '../reducers/tableSlice';
import { useSelector, useDispatch } from 'react-redux';
import TableRow from './TableRow';

const getHeader = (columns) => {
    const data = columns.map((column) => {
        return <div key={column.name} id={column.name}>{column.displayName}</div>
    })
    return data;
}

const getRows = (rows, remove) => {
    return rows ? rows.map((rowData) => <TableRow remove={remove} {...rowData} />) : [];
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

