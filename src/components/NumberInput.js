import React, { Component } from 'react';

class NumberInput extends Component {
    constructor(props) {
        super(props);
        this.onHandleTelephoneChange = this.onHandleTelephoneChange.bind(this);  
        this.state = {
            phone: '',
            regexp : /^[0-9\b]+$/
        }   
    }
    
    onHandleTelephoneChange = e => {
        let telephone = e.target.value;
        if (!Number(telephone)) {
            return;
        }
        // if value is not blank, then test the regex
        if (telephone === '' || this.state.regexp.test(telephone)) {
            // this.props.handleChange(telephone)
            this.setState({ [e.target.name]: telephone })
        }
    };

    render() {
        return (
            <>
                
                < input
                    type="phone" 
                    name="phone" 
                    className="form-control"
                    id="phone"
                    placeholder="Enter Phone Number"
                    value={this.state.telephone}
                    onChange={this.onHandleTelephoneChange}
                    name="phone"
                    min="0"
                / >
            </>
        );
    }
}
export default NumberInput;