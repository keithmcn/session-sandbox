import React from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import SelectCustomerForm from '../components/SelectCustomerForm';
import { Container, Col } from 'reactstrap';


const SelectCustomer = () => {
    return (
      <div>
        <AppNavbar />
        <Container >
          <Col>
            <div className="col-md-8 offset-md-2 col-xs-10 offset-xs-1">
              <SelectCustomerForm />
            </div>
          </Col>
        </Container>
      </div>
    );
}

export default SelectCustomer;
