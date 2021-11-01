import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';

const Hotels = () => {
    const [hotels,setHotels] = useState([])
    useEffect(()=>{
        fetch(' https://lit-basin-06871.herokuapp.com/hotels')
        .then(res=>res.json())
        .then(data=>setHotels(data))
    },[])
    return (
        <div> 
            <div><h1 className="text-danger p-5">Hotel Reservation</h1></div>
            <Container >
                <Row lg={3} xs={1}  className="g-4">

                  {
                      hotels.map(hotel=><Col key={hotel?._id}>
                          <Card className="p-4 card-style">
                              <Card.Img className="mx-auto w-100" src={hotel?.img} />
                              <Card.Title className="text-danger">{hotel?.name}</Card.Title>
                              <small>Price: ${hotel?.price}</small>
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

export default Hotels;