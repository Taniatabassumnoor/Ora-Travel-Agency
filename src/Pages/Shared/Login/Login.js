import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
const Login = () => {
const {signInUsingGoogle} =useAuth()
const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/home'

const handleGoogleLogIn = () => {
    signInUsingGoogle()
    .then(result => {
    history.push(redirect_uri);
    })
}

    return (
        <div className="m-5">
            <h1 className="mb-5">Please Login</h1>
            <Button onClick={handleGoogleLogIn} variant="warning">Google SignIn</Button>
        </div>
    );
};

export default Login;