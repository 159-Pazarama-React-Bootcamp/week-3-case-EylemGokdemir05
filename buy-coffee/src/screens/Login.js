import React from 'react';
import { useNavigate , useLocation } from "react-router-dom";

let history = useNavigate ();
let location = useLocation();
let auth = useAuth();
let { from } = location.state || { from: { pathname: "/" } };

function Login() {

    login = () => {
        auth.signin(() => {
          history.replace(from);
        });
    };

    return(
        <div className='container'>
            <h1>Login</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;