import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';

const Destinations = () => {
    const [destinations,setDestinations] = useState([])
    useEffect(()=>{
        fetch(' https://lit-basin-06871.herokuapp.com/destinations')
        .then(res=>res.json())
        .then(data=>setDestinations(data))
    },[])
    return (
        <div>
            <div><h1 className="text-danger p-5">Our Destinations</h1></div>
          <Container >
                <Row lg={3} xs={1}  className="g-4">

                  {
                      destinations.map(destination=><Col key={destination?._id}>
                          <Card className="p-4 card-style">
                              <Card.Img className="mx-auto w-100" src={destination?.img} />
                              <Card.Title className="text-danger">{destination?.name}</Card.Title>
                              <small>Price: ${destination?.price}</small>
                              <div className="mb-4 mt-2"><Button variant="warning">Book Now</Button></div>
                          </Card>
                          
                      </Col>)
                  }
                </Row>
            </Container> 
            <Footer></Footer>
        </div>
    );
};

export default Destinations;