import React from 'react';
import { useHistory } from 'react-router-dom';


const TableRow = ({ id, name, phone, email, gender, locations, remove }) => {
    const history = useHistory();
    const handleClick = (id) => history.push(`/editUser/${id}`);
    return <div className="row"  key={id}>

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

export default TableRow;