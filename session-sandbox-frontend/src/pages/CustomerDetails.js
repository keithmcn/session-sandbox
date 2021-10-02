import React, { useEffect, useState } from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import ResourceListView from '../components/ResourceListView';
import { Container, Row, Col, CardGroup} from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const Home = () => {

    useEffect(() => {

    });

    const MyEnhancedForm = withFormik({

        mapPropsToValues: () => ({ name: '' }),



        // Custom sync validation

        validate: values => {

            const errors = {};



            if (!values.name) {

                errors.name = 'Required';

            }



            return errors;

        },



        handleSubmit: (values, { setSubmitting }) => {

            setTimeout(() => {

                alert(JSON.stringify(values, null, 2));

                setSubmitting(false);

            }, 1000);

        },



        displayName: 'BasicForm',

    })(MyForm);


    return (
      <div>
        <AppNavbar />
        <Container>
          <Row>
              <Formik
                  initialValues={{
                      firstName: '',
                      lastName: '',
                      email: '',
                  }}
                  onSubmit={async (values) => {
                      await new Promise((r) => setTimeout(r, 500));
                      alert(JSON.stringify(values, null, 2));
                  }}
              >

                  <form action='selectCustomer' method="post">
                      <label htmlFor="selectCustomer">Choose: </label>

                      <br/>
                      <br/>
                      <br/>
                      <input type="submit" value="Proceed"/>
                  </form>

                  <Form>
                      <label htmlFor="firstName">First Name</label>
                      <Field id="firstName" name="firstName" placeholder="Jane" />

                      <label htmlFor="lastName">Last Name</label>
                      <Field id="lastName" name="lastName" placeholder="Doe" />

                      <label htmlFor="email">Email</label>
                      <Field
                          id="email"
                          name="email"
                          placeholder="jane@acme.com"
                          type="email"
                      />
                      <button type="submit">Submit</button>
                  </Form>
              </Formik>
          </Row>
        </Container>
      </div>
    );
}

export default Home;
