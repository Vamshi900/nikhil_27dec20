import React, { Component, useState } from 'react';

const NumberInput = ({ intialValue, handleChange }) => {
    const [phone, setPhone] = useState(intialValue);
    const handleValuechange = (e) => {
        const phone = e.target.value;
        if (!Number(phone) || phone.length > 10) {
            return;
        }
        setPhone(phone);
        handleChange({ target: { name: 'phone', value: phone, type: 'phone' } })
    }

    return (
        <>
            < input
                type="phone"
                name="phone"
                className="form-control"
                id="phone"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={handleValuechange}
                name="phone"
            />
        </>
    );
}


export default NumberInput;