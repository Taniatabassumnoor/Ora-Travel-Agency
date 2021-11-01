import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import './About.css'
const About = () => {
    const [aboutService,setAboutService] = useState([]);
    useEffect(()=>{
        fetch(' https://lit-basin-06871.herokuapp.com/about')
        .then(res=>res.json())
        .then(data=>setAboutService(data));
    },[])
    return (
        <div>
            
            <div className="about-banner">
            <div><h1 className="text-white">About Us</h1></div>
            <h1 className=" hero-about">Make your travel Experience <br />
            still better with us. </h1>
            </div>
            <div>
            <div className="mt-5">
            <h1 className="fw-bold pt-5 pb-2">We are the most <span className="text-danger">Ora Travel Agency </span></h1>
        <p>Trusted Travel Agency is serving travel service since 1991, A multispecialty travel agency with international standards, experienced guider, and eco-friendly <br /> concept delivers exceptional and valuable comprehensive high-quality travel agency to all its customers that will result in a beautiful and <br />good experiance.
        </p>
            </div>
            <Container >
                <Row lg={2} xs={1}  className="g-4">

                  {
                      aboutService.map(service=><Col key={service?.id}>
                          <Card className="p-4 card-style">
                              <Card.Img className="mx-auto w-25" src={service?.img} />
                              <Card.Title className="text-danger fs-2">{service?.name}</Card.Title>
                              <p className="fs-5">{service?.shortDescription}</p>
                          </Card>
                          
                      </Col>)
                  }
                </Row>
            </Container>
            <Footer></Footer>
            <br />
      
            </div>
        </div>
    );
};

export default About;