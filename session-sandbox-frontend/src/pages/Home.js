import React, { useEffect, useState } from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import ResourceListView from '../components/ResourceListView';
import { Container, Row, Col, CardGroup} from 'reactstrap';

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
