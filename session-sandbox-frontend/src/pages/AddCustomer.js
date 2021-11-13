import React from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import ValidatedAddCustomerForm from '../components/AddCustomerForm'
import { Container, Row } from 'reactstrap';

const AddCustomer = () => {
    return (
      <div>
          <AppNavbar />
          <Container>
            <Row>
                <ValidatedAddCustomerForm/>
            </Row>
          </Container>
      </div>
    );
}

export default AddCustomer;
