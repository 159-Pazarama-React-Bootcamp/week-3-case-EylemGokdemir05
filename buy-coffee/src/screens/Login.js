import React, {useState} from 'react';
import { useNavigate , useLocation } from "react-router-dom";
import '../style/login.css';
import InputContainer from '../components/InputContainer';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import vespa from '../assets/icons/vespa.png';
import google from '../assets/icons/google.png';
import github from '../assets/icons/github.png';
import facebook from '../assets/icons/facebook.png';

function Login() {

    let history = useNavigate ();
    let location = useLocation();
    let navigate = useNavigate();
    let { from } = location.state || { from: { pathname: "/" } };

    // const [form, setForm] = useState({ userName: "", password: "" });

    // const handleChange = (event) => {
    //     setForm({ ...form, [event.target.name]: event.target.value });
    // };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    const login = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user=userCredential.user;
            console.log('user ',user);
            history.replace(from);
        }).catch((err)=>{
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log("An error occured: ", errorCode, errorMessage);
        });
    };

    return(
        <div className='container'>
            <h1>Login</h1>
            <div className="login-form-container">
                <InputContainer 
                    label="Email" 
                    name="userName" 
                    type="email" 
                    placeholder="abc@xyz.com" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <InputContainer 
                    label="Password" 
                    name="password" 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={setEmail}
                />
                <button className='login-btn' onClick={login}>Login</button>
                <br/>
                <p>or continue with</p>
                <div className='socialContainer'>
                    <div className='iconContainer'>
                        <img className='google' src={google} />
                    </div>
                    <div className='iconContainer'>
                        <img className='github' src={github} />
                    </div>
                    <div className='iconContainer'>
                        <img className='facebook' src={facebook} />
                    </div>
                </div>
                <br/>
                <div>
                    <p>Don't have an account yet?</p>
                    <p onClick={()=>history.replace("/home" )}>Register for free</p>
                </div>
            </div>
            <img className='vespa' src={vespa} />
        </div>
    )
}

export default Login;