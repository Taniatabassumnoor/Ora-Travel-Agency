
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PlaceOrder.css';
const PlaceOrder = () => {
    const nameRef = useRef();
    const cityRef = useRef();
    const history = useHistory()
    const handlePlaceOrder = () => {
        history.push('/home')
        
    }
    const { register, handleSubmit , formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        const name = nameRef.current.value;
        const city = cityRef.current.value;
        const newUser = {name,city};
        fetch(` https://lit-basin-06871.herokuapp.com/orders`,{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Successfully added the user.')
             
            }
        })
        console.log(data);
        
    }

    
    return (
        <div>
            <h1 className=" pt-5 text-danger fw-bold head">Booking Form</h1>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>      
      <input  defaultValue={user.displayName} {...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {errors.email && <span className="error">This field is required</span>}
      <input ref={nameRef} placeholder="Name" defaultValue="" {...register("personname")} />
      <input ref={cityRef} placeholder="City" defaultValue="" {...register("city")} />
      <input placeholder="Age" defaultValue="" {...register("age")} />
      <input placeholder="Occupation" defaultValue="" {...register("occupation")} />
      <input placeholder="Phone" defaultValue="" {...register("phone")} />
      <input onClick={handlePlaceOrder} className="booking-btn" type="submit" />
    </form>
        </div>
    );
};

export default PlaceOrder;