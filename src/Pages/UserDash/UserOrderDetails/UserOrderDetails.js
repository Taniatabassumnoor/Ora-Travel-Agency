import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


const UserOrderDetails = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch(` https://lit-basin-06871.herokuapp.com/services`)
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
  
    const handleDelete = id => {
        const url = ` https://lit-basin-06871.herokuapp.com/${id}`;
       fetch(url,{
           method: 'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
        if (data.deletedCount) {
            console.log("Successfully deleted one document.");
            const remaining = services.filter(service=>service._id !== id);
           setServices(remaining);
          }
           
       })
    }
    return (
        <div>
            <h1>This is order details</h1>
            {
                services.map(service=><div key={service?._id}>
                    <h3>{service?.name}</h3>
                    <Button onClick={()=>handleDelete(service._id)} variant="danger">Delete</Button>
                </div>)
            }
        </div>
    );
};

export default UserOrderDetails;