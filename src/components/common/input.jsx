import React from 'react';

const Input = ({name,placeholder,type = "text" ,...rest}) => {
    return ( 
        <input {...rest} name={name} id={name} placeholder={placeholder} type={type} className="form-control col-5"></input>
     );
}
 
export default Input;
