import React, {useState} from 'react';
import { useNavigate , useLocation } from "react-router-dom";
import '../style/login.css';
import InputContainer from '../components/InputContainer';

function Login() {

    let history = useNavigate ();
    let location = useLocation();
    let auth = useNavigate();
    let { from } = location.state || { from: { pathname: "/" } };

    const [form, setForm] = useState({ userName: "", password: "" });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const login = () => {
        auth.signin(() => {
          history.replace(from);
        });
    };

    return(
        <div className='container'>
            <h1>Login</h1>
            <div className="lf-form-container">
                <InputContainer 
                    label="Email" 
                    name="userName" 
                    type="email" 
                    placeholder="abc@xyz.com" 
                    onChange={handleChange}
                    value={form.userName}
                />
                <InputContainer 
                    label="Password" 
                    name="password" 
                    type="password"
                    onChange={handleChange}
                    value={form.password}
                />
            </div>
            <button className='login-btn' onClick={login}>Login</button>
        </div>
    )
}

export default Login;