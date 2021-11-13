import React from 'react';
import '../App.css';
import { Field, Form, withFormik } from 'formik';
import FormInput from './FormInput'
import { FormGroup, Button } from 'reactstrap';

const AddCustomerForm = props => {
     const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
     } = props;

    return (
        <Form>

            <FormInput id='firstName' labelText='First Name' placeholder="First Name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.firstName}/>
            {errors.firstName && touched.firstName && <div id="firstNameFeedback">{errors.firstName}</div>}

            <FormInput id='lastName' labelText='Last Name' placeholder="Last Name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.lastName}/>
            {errors.lastName && touched.lastName && <div id="lastNameFeedback">{errors.lastName}</div>}

            <FormInput id='email' labelText='Email' placeholder="Email" type="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}/>
            {errors.email && touched.email && <div id="emailFeedback">{errors.email}</div>}

           <FormGroup row>
                <Button type="submit" color="primary">Submit</Button>
           </FormGroup>
        </Form>
    );
};

const ValidatedAddCustomerForm = withFormik({
    mapPropsToValues: () => ({
        firstName: '',
        lastName: '',
        email: ''
    }),

   // Custom sync validation
   validate: values => {
     const errors = {};

     if (!values.firstName) {
        errors.firstName = 'First Name Required';
     }
     if (!values.lastName) {
        errors.lastName = 'Last Name Required';
     }
     if (!values.email) {
        errors.email = 'Email Required';
     }

     return errors;
   },

   handleSubmit: (values, { setSubmitting }) => {
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2));
       setSubmitting(false);
     }, 1000);
   },

   displayName: 'CustomerDetails',
 })(AddCustomerForm);

export default ValidatedAddCustomerForm;


// <label htmlFor="firstName">First Name</label>
//            <Field id="firstName" name="firstName" placeholder="First Name" />
//
//            <label htmlFor="lastName">Last Name</label>
//            <Field id="lastName" name="lastName" placeholder="Last Name" />
//
//            <label htmlFor="email">Email</label>
//            <Field id="email" name="email" placeholder="Email" type="email"/>