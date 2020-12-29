import React from 'react';
import NumberInput from './NumberInput';
import CheckBoxContainer from './CheckBoxContainer';

function Form({
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
}) {
    console.log(values);
    return (
        <div>

            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group">
                    <label htmlFor="name-input">
                        Name *
            <input
                            type="text"
                            className="form-control"
                            id="name-input"
                            placeholder="Enter your name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="name"
                            required
                        />
                        {touched.firstName && errors.firstName}
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        Email address *
            <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="email"
                            required
                        />
                        {touched.email && errors.email}
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">
                        Phone number *
            <NumberInput handleChange={handleChange} intialValue={values.phone} />

                    </label>
                </div>


                <div className="form-group">
                    <label htmlFor="Gender">
                        Gender *
                        <div>
                            <select id="gender" name='gender' className="form-control btn btn-secondary dropdown-toggle" onChange={handleChange} onBlur={handleBlur}  >
                                {
                                    ['select', 'male', 'female'].map(
                                        (optionVal) =>
                                            <option value={optionVal} selected={optionVal === values.gender}>{optionVal}</option>
                                    )
                                }
                            </select>
                        </div>

                        {touched.gender && errors.gender}
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="checkbox">
                        Preffered Locations *
                        <div>

                            <CheckBoxContainer handleToggle={handleChange} intialValue={values.locations} />

                        </div>
                        {touched.locations && errors.locations}
                    </label>
                </div>


                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Submit
          </button>
                </div>
            </form>
        </div>
    );
}

export default Form;