import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './SingleServices.css';

const SingleServices = () => {
    const { id } = useParams();
    const [single, setSingle] = useState([])
    useEffect(() => {
        fetch(` https://lit-basin-06871.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [])
    return (
        <div>
            <Container>
                <Row className="card-design">
                    <Col md={4} >
                        <Card>
                            <Card.Img variant="top" className="w-100" src={single?.img1} />
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title >{single?.name}</Card.Title>
                                <Card.Text >
                                    {single?.shortDescription}
                                </Card.Text>
                            </Card.Body>
                            <div className="mb-4"><Button variant="warning">Book Now</Button></div>
                        </Card>
                        
                    </Col>
                    
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={single?.img2} />
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title >{single?.name}</Card.Title>
                                <Card.Text >
                                    {single?.shortDescription}
                                </Card.Text>
                            </Card.Body>
                            <div className="mb-4"><Button variant="warning">Book Now</Button></div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={single?.img3} />
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title >{single?.name}</Card.Title>
                                <Card.Text >
                                    {single?.shortDescription}
                                </Card.Text>
                            </Card.Body>
                            <div className="mb-4"><Button variant="warning">Book Now</Button></div>
                        </Card>
                    </Col>
                </Row>
                
            </Container>

        </div>
    );
};

export default SingleServices;