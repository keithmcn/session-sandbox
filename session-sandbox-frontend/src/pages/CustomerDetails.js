import React from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import ValidatedCustomerDetailsForm from '../components/CustomerDetailsForm'
import { Container, Row } from 'reactstrap';

const CustomerDetails = () => {
    return (
      <div>
          <AppNavbar />
          <Container>
            <Row>
                <ValidatedCustomerDetailsForm/>
            </Row>
          </Container>
      </div>
    );
}

export default CustomerDetails;
