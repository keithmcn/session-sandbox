import { Container, Row, Col } from 'reactstrap';
import '../App.css';

const CustomerDetailRow = ({ data }) => {

    return (
    <Container className='cusDetailsContainer'>
        <Row>
            <Col>SOIP:   {data.contract.soip ? 'Yes' : 'No'}</Col>
            <Col>BB:   {data.contract.bb ? 'Yes' : 'No'}</Col>
            <Col>Phone:   {data.contract.telephone ? 'Yes' : 'No'}</Col>
        </Row>
    </Container>
    );

}

export default CustomerDetailRow;