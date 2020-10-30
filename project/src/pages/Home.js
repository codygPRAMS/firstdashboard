import React, {Component} from 'react';
import Example from '../components/Home/card';
import Modal from '../components/Modal';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
    render() {
    return (
        <Container className="first-container"> 
                <Row xs="2">
                    <Col color="danger" lg="3" md="6" sm="6">
                        <Example />
                    </Col>
                    <Col xs="auto">
                        <Modal />
                    </Col>
                    <Col md="3">
                        <div> Test 2</div>
                    </Col>
                </Row>
                <Row>
                    <Col color="danger">
                    2nd row
                    </Col>
                </Row>
        </Container>        
    );
};
}

export default Home;