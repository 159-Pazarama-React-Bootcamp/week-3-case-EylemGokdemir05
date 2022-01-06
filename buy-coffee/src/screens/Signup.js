import React,{useState} from 'react';
import { useNavigate , useLocation } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../style/login.css';
import InputContainer from '../components/InputContainer';

function Signup() {

    let history = useNavigate ();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [usermail, setUserMail] = useState('');
    const [userpass, setUserPass] = useState('');
    const [userpassRep, setPasswordRep] = useState('');

    const setMail = (text) => setUserMail(text);
    const setPass = (text) => setUserPass(text);
    const setPassRep = (text) => setPasswordRep(text);

    const signUp = async () => {
        const auth=getAuth();
        if(userpass == userpassRep){
            createUserWithEmailAndPassword(auth,usermail,userpass)
            .then((userCredential)=>{
                const user=userCredential.user;
                setMail("");
                setPass("");
                setPassRep("");
                history.replace(from);
            }).catch((err)=>{
                const errorCode=err.code;
                const errorMessage=err.message;
                console.log("Error ocured: ", errorCode, errorMessage);
            })
        }else {
            alert('Şifreler uyuşmuyor !');
        }
    }

    // const [form, setForm] = useState({ userName: "", password: "" });

    // const handleChange = (event) => {
    //     setForm({ ...form, [event.target.name]: event.target.value });
    // };

    return(
        <div className='container'>
            <h1>Signup</h1>
            <div className="lf-form-container">
                <InputContainer 
                    label="Email" 
                    name="userName" 
                    type="email" 
                    placeholder="abc@xyz.com" 
                    onChange={(e) => setUserMail(e.target.value)}
                    value={usermail}
                />
                <InputContainer 
                    label="Password" 
                    name="password" 
                    type="password"
                    onChange={(e) => setUserPass(e.target.value)}
                    value={userpass}
                />
                <InputContainer 
                    label="Password" 
                    name="password" 
                    type="password"
                    onChange={(e) => setPassRep(e.target.value)}
                    value={userpassRep}
                />
            </div>
            <button className='signup-btn' onClick={signUp}>Signup</button>
        </div>
    )
}

export default Signup;