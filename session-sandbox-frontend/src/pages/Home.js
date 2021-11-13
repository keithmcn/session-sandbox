import React from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import CustomerListView from '../components/CustomerListView';
import { Container, Row } from 'reactstrap';

const Home = () => {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Row>
            <CustomerListView/>
          </Row>
        </Container>
      </div>
    );
}

export default Home;
