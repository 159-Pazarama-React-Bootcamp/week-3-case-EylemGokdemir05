import React, {useState} from 'react';
import '../style/input.css';
import EyeIcon from './svg-components/EyeIcon';

function InputContainer(props) {

    const {label, type,placeholder}=props;
    const [inputType, setInputType] = useState(type);

    const handleShowPassword = () => {
        if(inputType === "text"){
            setInputType("password");
        } else {
            setInputType("text");
        }
    }

    return(
        <div className="field-container">
            <input className="field-input" label={label} type={inputType} placeholder={placeholder}/>
            {type==='password' && (
                <i className='icon' onClick={handleShowPassword}>
                    <EyeIcon />
                </i>
            )}
        </div>
    )
}

export default InputContainer;