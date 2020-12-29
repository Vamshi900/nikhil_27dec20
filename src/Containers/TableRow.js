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

        <span  onClick={() => handleClick(id)}>Edit</span>
        </div>
        <div className="remove">

        <span  onClick={() => remove(id)}>X</span>
        </div>
    </div>
};

export default TableRow;