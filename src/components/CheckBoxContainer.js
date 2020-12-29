import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../components/CheckBox';

import { checkboxes } from '../utils/constants';


const CheckboxContainer = ({ intialValue = '', handleToggle }) => {
    const [preferedLocation, setPreferedLocation] = useState(intialValue)

    const getIntialChecked = () => {
        let checkedItems = new Map();
        if (intialValue !== '') {
            const toSet = preferedLocation.split(',');
            toSet.forEach(element => {
                checkedItems.set(element, true)
            });
        }

        return checkedItems;
    }
    const [checkedItems, setCheckedItems] = useState(getIntialChecked())

    const getUpdateLocation = (item, isChecked) => {
        let locations = preferedLocation;

        if (isChecked) {
            if (!locations.includes(item)) {
                locations += locations === '' ? item : `,${item}`;
            }
        } else {
            if (locations.includes(item)) {
                let newLocations = '';
                if (checkedItems.size > 0) {
                    for (const [key, value] of checkedItems.entries()) {
                        if (value && newLocations === '' && key !== item) {
                            newLocations += key;
                        } else if (value) {
                            newLocations += key === item ? '' : `,${key}`;

                        }
                    }
                }
                locations = newLocations;
            }
        }
        return locations
    }
    const handleChange = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        const locations = getUpdateLocation(item, isChecked);
        const newCheckeditems = checkedItems.set(item, isChecked);
        setCheckedItems(newCheckeditems);
        setPreferedLocation(locations);
        handleToggle({ target: { name: 'locations', value: locations, type: 'locations' } })
    }

    return (
        <React.Fragment>
            {
                checkboxes.map(item => (
                    <label key={item.key}>
                        {item.name}
                        <Checkbox name={item.name} checked={checkedItems.get(item.name)} onChange={handleChange} />
                    </label>
                ))
            }
        </React.Fragment>
    );

}

export default CheckboxContainer;