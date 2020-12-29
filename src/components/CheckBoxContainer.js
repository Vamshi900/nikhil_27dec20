import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../components/CheckBox';

import { checkboxes } from '../utils/constants';

class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
            location: props.intialValue,
        }

        // this.handleChange = this.handleChange.bind(this);
    }
    getUpdateLocation = (item, isChecked) => {
        let locations = this.state.location;

        if (isChecked) {
            if (!locations.includes(item)) {
                locations += locations === '' ? item : `,${item}`;
            }
        } else {
            if (locations.includes(item)) {
                let newLocations = '';
                if (this.state.checkedItems.size > 0) {
                    for (const [key, value] of this.state.checkedItems.entries()) {
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
    handleChange = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        console.log(this.state);
        const locations = this.getUpdateLocation(item, isChecked);


        this.setState(prevState => {
            return { checkedItems: prevState.checkedItems.set(item, isChecked), location: locations }
        });
        this.props.handleChange({ target: { name: 'locations', value: locations, type: 'locations' } })
    }

    render() {
        return (
            <React.Fragment>
                {
                    checkboxes.map(item => (
                        <label key={item.key}>
                            {item.name}
                            <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                        </label>
                    ))
                }
            </React.Fragment>
        );
    }
}

export default CheckboxContainer;