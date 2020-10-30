import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col, Row, Container} from 'reactstrap';

class Example extends Component {
  render () {
    return (
    <Card>
        <Container>
            {/*  style={{ display: "grid", 
                          gridTemplateColumns: "repeat(3, 1fr)", 
                          gridGap: 20 }}  */}
            <Row>
                <Col>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Col>
                <Col>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Col>
                <Col>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Col>
            </Row>
        </Container>
    </Card>
    );
  };
};

export default Example;