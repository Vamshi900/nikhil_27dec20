import React from 'react';
import Form from '../components/Form';
import Debug from '../utils/Debug';
import { validate } from '../utils/helper';


function UserDetails({ initialValues, handleFormSubmit }) {
  console.log(initialValues);
  console.log(handleFormSubmit);
  const [values, setValues] = React.useState(initialValues);

  const [errors, setErrors] = React.useState({});

  const [touched, setTouched] = React.useState({});

  // change event handler
  const handleChange = evt => {
    const { name, value: newValue, type } = evt.target;

    // keep number fields as numbers
    const value = type === 'number' ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value,
    });

    // was the field modified
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;

    // remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors;

    // check for a new error
    const error = validate[name](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  // form submit handler
  const handleSubmit = evt => {
    evt.preventDefault();

    // validate the form
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        if (validate[key]) {
          const newError = validate[key](values[key]);
          const newTouched = { [key]: true };
          return {
            errors: {
              ...acc.errors,
              ...(newError && { [key]: newError }),
            },
            touched: {
              ...acc.touched,
              ...newTouched,
            },
          };
        } else {
          return acc;
        }

      },
      {
        errors: { ...errors },
        touched: { ...touched },
      },
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // errors object is empty
      Object.values(formValidation.touched).length > 0 && // all fields were touched
      Object.values(formValidation.touched).every(t => t === true) // every touched field is true
    ) {
      alert(JSON.stringify(values, null, 2));
      handleFormSubmit(values);
    }
  };
  console.log(values);
  return (
    <>
      <Form
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        values={values}
      />
      {/* <Debug values={values} errors={errors} touched={touched} /> */}
    </>
  );
}

export default UserDetails;
