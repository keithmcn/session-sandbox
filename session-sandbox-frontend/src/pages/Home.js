import React from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import ResourceListView from '../components/ResourceListView';
import { Container, Row } from 'reactstrap';

const Home = () => {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Row>
            <ResourceListView/>
          </Row>
        </Container>
      </div>
    );
}

export default Home;
